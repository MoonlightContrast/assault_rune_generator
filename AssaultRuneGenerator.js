/**
 * Generateボタン押下時処理
 */
const generate_onclick = function() {
    
    // 画面入力価取得
    const rune1value  = document.getElementById('rune1').value;                 // ルーン1文字目の文字
    const rune2value  = document.getElementById('rune2').value;                 // ルーン2文字目の文字
    const rune1color  = document.getElementById('rune1color').value;            // ルーン1文字目の色
    const rune2color  = document.getElementById('rune2color').value;            // ルーン2文字目の色
    const lapColor    = document.getElementById('lapcolor').value;              // ラップ色
    const rune1mirror = document.getElementById('chkRune1Mirror').checked;      // ルーン1文字目のミラーフラグ
    const rune2mirror = document.getElementById('chkRune2Mirror').checked;      // ルーン2文字目のミラーフラグ
    const hPostLeft   = document.getElementById('radHPosLeft').checked;         // 水平位置左
    const hPostRight  = document.getElementById('radHPosRight').checked;        // 水平位置右
    const bgColor     = document.getElementById('bgcolor').value;               // 背景色
    const imgSize     = document.getElementById('imgSize').value;               // 画像サイズ
    
    // ルーン文字SVG取得
    const runeChars = {
        A0  :document.getElementById('SVG_A0'  ),    // ᚠ:FEOH
        A2  :document.getElementById('SVG_A2'  ),    // ᚢ:UR
        A3  :document.getElementById('SVG_A3'  ),    // ᚣ:YR
        A6  :document.getElementById('SVG_A6'  ),    // ᚦ:THORN
        A8  :document.getElementById('SVG_A8'  ),    // ᚨ:ANSUZ
        A9  :document.getElementById('SVG_A9'  ),    // ᚩ:OS
        AA  :document.getElementById('SVG_AA'  ),    // ᚪ:AC<Unofficial>
        B1  :document.getElementById('SVG_B1'  ),    // ᚱ:REID
        B2  :document.getElementById('SVG_B2'  ),    // ᚲ:KAUNA
        B3  :document.getElementById('SVG_B3'  ),    // ᚳ:CEN1
        B3_2:document.getElementById('SVG_B3_2'),    // ᚳ:CEN2
        B7  :document.getElementById('SVG_B7'  ),    // ᚷ:GYFU
        B8  :document.getElementById('SVG_B8'  ),    // ᚸ:GAR<Unofficial>
        B9  :document.getElementById('SVG_B9'  ),    // ᚹ:WYNN
        BB  :document.getElementById('SVG_BB'  ),    // ᚻ:HAEGL<Unofficial>
        BB_2:document.getElementById('SVG_BB_2'),    // ᚻ:HAEGL2<Unofficial>
        BE  :document.getElementById('SVG_BE'  ),    // ᚾ:NAUD
        C1  :document.getElementById('SVG_C1'  ),    // ᛁ:ISS
        C4  :document.getElementById('SVG_C4'  ),    // ᛄ:GER
        C7  :document.getElementById('SVG_C7'  ),    // ᛇ:YL<Unofficial>
        C8  :document.getElementById('SVG_C8'  ),    // ᛈ:PEORTH
        C9  :document.getElementById('SVG_C9'  ),    // ᛉ:EOLHX
        CB  :document.getElementById('SVG_CB'  ),    // ᛋ:SIGEL
        CB_2:document.getElementById('SVG_CB_2'),    // ᛋ:SIGEL2
        CF  :document.getElementById('SVG_CF'  ),    // ᛏ:TYR
        D2  :document.getElementById('SVG_D2'  ),    // ᛒ:BEORC
        D6  :document.getElementById('SVG_D6'  ),    // ᛖ:EH
        D7  :document.getElementById('SVG_D7'  ),    // ᛗ:MAN
        DA  :document.getElementById('SVG_DA'  ),    // ᛚ:LOGR
        DD  :document.getElementById('SVG_DD'  ),    // ᛝ:ING
        DE  :document.getElementById('SVG_DE'  ),    // ᛞ:DAEG
        DF  :document.getElementById('SVG_DF'  ),    // ᛟ:ETHEL
        E0  :document.getElementById('SVG_E0'  ),    // ᛠ:EAR<Unofficial>
        E1  :document.getElementById('SVG_E1'  ),    // ᛡ:IOR<Unofficial>
        E2  :document.getElementById('SVG_E2'  ),    // ᛢ:CWEORTH<Unofficial>
        E3  :document.getElementById('SVG_E3'  ),    // ᛣ:CALC<Unofficial>
        E4  :document.getElementById('SVG_E4'  ),    // ᛤ:CEALC<Unofficial>
        E5  :document.getElementById('SVG_E5'  ),    // ᛥ:STAN<Unofficial>
        E5_2:document.getElementById('SVG_E5_2'),    // ᛥ:SAN2<KUnofficial>
    };
    
    // 1文字目と2文字目のルーンのSVGを特定
    const rune1ele = runeChars[rune1value];
    const rune2ele = runeChars[rune2value];
    
    // TODO : ルーンの表示位置を決定
    const imgLeft = 0;
    const imgTop  = 0;
    
    // ルーンのサイズを決定
    const imgWidth  = imgSize;
    const imgHeight = imgWidth;
    rune1ele.width  = imgWidth;
    rune1ele.height = imgHeight;
    rune2ele.width  = imgWidth;
    rune2ele.height = imgHeight;
    
    // 1文字目のルーン描画
    const rune1canvas = document.getElementById('rune1Canvas');
    drawRune(rune1Canvas, imgWidth, imgHeight, rune1ele, rune1color, rune1mirror);
    
    // 2文字目のルーン描画
    const rune2canvas = document.getElementById('rune2Canvas');
    drawRune(rune2Canvas, imgWidth, imgHeight, rune2ele, rune2color, rune2mirror);
    
    // ルーンの重なり部分を描画
    const runeLapCanvas  = document.getElementById('runeLapCanvas');
    runeLapCanvas.width  = imgWidth;
    runeLapCanvas.height = imgHeight;
    const runeLapContext = runeLapCanvas.getContext('2d');
    drawImageMirror(runeLapContext, rune1ele, imgLeft, imgTop, imgWidth, imgHeight, rune1mirror);   // ルーン1文字目の形をSVGで描画
    runeLapContext.globalCompositeOperation = 'source-in';                                          // 合成形式をsource-in(AND)に設定

    // ルーン2をミラーさせる場合 ミラーする
    drawImageMirror(runeLapContext, rune2ele, imgLeft, imgTop, imgWidth, imgHeight, rune2mirror);   // ルーン2文字目の形をSVGで描画
    runeLapContext.globalCompositeOperation = 'source-in';                                          // 合成形式をsource-in(AND)に設定
    runeLapContext.fillStyle = lapColor;                                                            // ルーン1文字目と2文字目の重なり部分の色を適用
    runeLapContext.fillRect(imgLeft, imgTop, imgWidth, imgHeight);                                  // ルーン1文字目と2文字目の重なり部分の形が残るようにキャンバス全体を塗りつぶす
    
    // アウトプットに1文字目＋2文字目のルーン描画
    const tempCanvas = document.getElementById('tempCanvas');
    tempCanvas.width  = imgWidth;
    tempCanvas.height = imgHeight;
    const context    = tempCanvas.getContext('2d');
    context.fillStyle = bgColor;                                    // 背景色設定
    context.fillRect(0, 0, imgWidth, imgHeight);                    // 背景色描画
    
    // 水平位置左の場合、右にずらす
    if (hPostLeft) {
        context.translate((imgWidth / 5), 0);
    
    // 水平位置右の場合、左にずらす
    } else if (hPostRight) {
        context.translate(-(imgWidth - (imgWidth / 5) * 4), 0);
    }
    
    context.drawImage(rune1canvas,   0, 0, imgWidth, imgHeight);    // ルーン1文字目描画
    context.drawImage(rune2canvas,   0, 0, imgWidth, imgHeight);    // ルーン2文字目描画
    context.drawImage(runeLapCanvas, 0, 0, imgWidth, imgHeight);    // ルーン2文字目描画
    
    // TODO : Generate後保存できるようにする
};

/**
 * ルーン描画
 */
const drawRune = function(destRuneCanvas, 
                          width, 
                          height, 
                          runeEle,
                          runeColor,
                          runeMirror) 
{

    // 指定したキャンバスにルーン描画
    destRuneCanvas.width  = width;
    destRuneCanvas.height = height;
    const runeContext = destRuneCanvas.getContext('2d');
    drawImageMirror(runeContext, runeEle, 0, 0, width, height, runeMirror);     // ルーン文字の形をSVGで描画
    runeContext.globalCompositeOperation = 'source-in';                         // 合成形式をsource-in(AND)に設定
    runeContext.fillStyle = runeColor;                                          // ルーン文字の色を適用
    runeContext.fillRect(0, 0, width, height);                                  // ルーン文字の形が残るようにキャンバス全体を塗りつぶす
};

/** ミラー描画 */
const drawImageMirror = function(context,
                                 ele,
                                 left,
                                 top,
                                 width,
                                 height,
                                 mirror)
{
    
    // ミラーさせる場合 ミラーする
    if (mirror) {
        context.scale(-1,1);
        context.translate(-width, 0);
    }
    
    // 指定したキャンバスにルーン描画
    context.drawImage(ele, left, top, width, height);   // ルーン文字の形をSVGで描画
    
    // ミラーさせる場合 ミラーする
    if (mirror) {
        context.scale(-1,1);
        context.translate(-width, 0);
    }
};

/** 非公式ルーン表示 */
const chkShowUnofficial = function() {

    // 非公式ルーンの表示制御
    const chkShowUnofficial = document.getElementById('chkShowUnofficial').checked;
    const unofficialRunes = document.querySelectorAll('.unofficial_rune');
    unofficialRunes.forEach(function(rune) {
        if (chkShowUnofficial) {
            rune.style.display = 'initial';
        } else {
            rune.style.display = 'none';
        }
    });
};

/** リアルタイム変更イベント */
const onchange_input = function() {
    
    // Real time無効の場合何も実行しない
    const chkShowUnofficial = document.getElementById('chkRealtime').checked;
    if (!chkShowUnofficial) {
        return;
    }  

    // Real time有効の場合 Generate実行
    generate_onclick();
};
