/* Libraries used
 * Vue.js v3
 * MIT
 * 
 * Copyright (c) 2013-present, Yuxi (Evan) You
 * 
 * ///////////////////////////////////////////
 * 
 * vue-i18n-next
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 kazuya kawaguchi
 * 
 * ///////////////////////////////////////////
 * 
 * Bootstrap 5.0.2
 * Code and documentation copyright 2011–2021 the Bootstrap Authors and Twitter, Inc. Code released under the MIT License. Docs released under Creative Commons.
 * 
 * ///////////////////////////////////////////
 */
/** ルーン文字SVG配列 */
let runeChars = null;

/** Backgroud collapseオブジェクト */
let backgroudCllapse = null;

/** Vue.js i18n用メッセージ */
const i18nResource = {
    en: {           // 英語
        label: {    // 表記
            title:           'Assault Rune Generator',       // タイトル
            rune1:           'Rune 1',                       // ルーン1
            rune2:           'Rune 2',                       // ルーン2
            color:           'Color',                        // ルーン色
            mirror:          'Mirror',                       // ルーン色
            background:      'Background',                   // 背景色関連
            lapColor:        'Lap. color',                   // ラップカラー
            size:            'Size(px)',                     // サイズ
            backgroundColor: 'Color',                        // 背景色
            realTime:        'Real time',                    // 即時反映
            unofficialRune:  'Show unoffice rune',           // 非公式ルーン表示
            horizontalPos:   'Horizontal Position',          // 水平方向設定
            left:            'Left',                         // 左
            center:          'Center',                       // 中央
            right:           'Right',                        // 右
            generate:        'Generate',                     // 生成ボタン
            rasterImage:     'Raster image',                 // ラスター画像
        },
        rune: {     // ルーン
            cA0   : 'ᚠ:FEOH',                  // ᚠ:FEOH
            cA2   : 'ᚢ:UR',                    // ᚢ:UR
            cA3   : 'ᚣ:YR<Unofficial>',        // ᚣ:YR<Unofficial>
            cA6   : 'ᚦ:THORN',                 // ᚦ:THORN
            cA8   : 'ᚨ:ANSUZ',                 // ᚨ:ANSUZ
            cA9   : 'ᚩ:OS',                    // ᚩ:OS
            cAA   : 'ᚪ:AC<Unofficial>',        // ᚪ:AC<Unofficial>
            cB1   : 'ᚱ:REID',                  // ᚱ:REID
            cB2   : 'ᚲ:KAUNA',                 // ᚲ:KAUNA
            cB3   : 'ᚳ:CEN',                   // ᚳ:CEN
            cB3_2 : 'ᚳ:CEN2',                  // ᚳ:CEN2
            cB7   : 'ᚷ:GYFU',                  // ᚷ:GYFU
            cB8   : 'ᚸ:GAR<Unofficial>',       // ᚸ:GAR<Unofficial>
            cB9   : 'ᚹ:WYNN',                  // ᚹ:WYNN
            cBB   : 'ᚻ:HAEGL',                 // ᚻ:HAEGL
            cBB_2 : 'ᚻ:HAEGL2',                // ᚻ:HAEGL2
            cBE   : 'ᚾ:NAUD',                  // ᚾ:NAUD
            cC1   : 'ᛁ:ISS',                   // ᛁ:ISS
            cC4   : 'ᛄ:GER',                   // ᛄ:GER
            cC7   : 'ᛇ:YL<Unofficial>',        // ᛇ:YL<Unofficial>
            cC8   : 'ᛈ:PEORTH',                // ᛈ:PEORTH
            cC9   : 'ᛉ:EOLHX',                 // ᛉ:EOLHX
            cCB   : 'ᛋ:SIGEL',                 // ᛋ:SIGEL
            cCB_2 : 'ᛋ:SIGEL2',                // ᛋ:SIGEL2
            cCF   : 'ᛏ:TYR',                   // ᛏ:TYR
            cD2   : 'ᛒ:BEORC',                 // ᛒ:BEORC
            cD6   : 'ᛖ:EH',                    // ᛖ:EH
            cD7   : 'ᛗ:MAN',                   // ᛗ:MAN
            cDA   : 'ᛚ:LOGR',                  // ᛚ:LOGR
            cDD   : 'ᛝ:ING',                   // ᛝ:ING
            cDE   : 'ᛞ:DAEG',                  // ᛞ:DAEG
            cDF   : 'ᛟ:ETHEL',                 // ᛟ:ETHEL
            cE0   : 'ᛠ:EAR<Unofficial>',       // ᛠ:EAR<Unofficial>
            cE1   : 'ᛡ:IOR<Unofficial>',       // ᛡ:IOR<Unofficial>
            cE2   : 'ᛢ:CWEORTH<Unofficial>',   // ᛢ:CWEORTH<Unofficial>
            cE3   : 'ᛣ:CALC<Unofficial>',      // ᛣ:CALC<Unofficial>
            cE4   : 'ᛤ:CEALC<Unofficial>',     // ᛤ:CEALC<Unofficial>
            cE5   : 'ᛥ:STAN<Unofficial>',      // ᛥ:STAN<Unofficial>
            cE5_2 : 'ᛥ:STAN2<Unofficial>',     // ᛥ:STAN2<Unofficial>
        },
        message: {  // メッセージ
            sizeInvalid: 'Please enter the number of pixels from {miniPix}px to 1000px.',       // 画像サイズ不正時のエラーメッセージ
        },
    },
    ja: {           // 日本語
        label: {    // 表記
            title:           'アサルトルーン生成器',         // タイトル
            rune1:           'ルーン 1',                     // ルーン1
            rune2:           'ルーン 2',                     // ルーン2
            color:           '色',                           // ルーン色
            mirror:          '反転',                         // ルーン色
            background:      '背景色関連',                   // 背景色関連
            lapColor:        '重なる部分の色',               // ラップカラー
            size:            '画像サイズ(px)',               // サイズ
            backgroundColor: '背景色',                       // 背景色
            realTime:        '即時反映',                     // 即時反映
            unofficialRune:  '非公式ルーンを表示',           // 非公式ルーン表示
            horizontalPos:   '水平方向表示位置',             // 水平方向表示位置
            left:            '左',                           // 左
            center:          '中央',                         // 中央
            right:           '右',                           // 右
            generate:        'ルーン画像生成',               // 生成ボタン
            rasterImage:     '生成ルーン',                   // ラスター画像
        },
        rune: {     // ルーン
            cA0   : 'ᚠ:FEOH',                  // ᚠ:FEOH
            cA2   : 'ᚢ:UR',                    // ᚢ:UR
            cA3   : 'ᚣ:YR<非公式>',            // ᚣ:YR<Unofficial>
            cA6   : 'ᚦ:THORN',                 // ᚦ:THORN
            cA8   : 'ᚨ:ANSUZ',                 // ᚨ:ANSUZ
            cA9   : 'ᚩ:OS',                    // ᚩ:OS
            cAA   : 'ᚪ:AC<非公式>',            // ᚪ:AC<Unofficial>
            cB1   : 'ᚱ:REID',                  // ᚱ:REID
            cB2   : 'ᚲ:KAUNA',                 // ᚲ:KAUNA
            cB3   : 'ᚳ:CEN',                   // ᚳ:CEN
            cB3_2 : 'ᚳ:CEN2',                  // ᚳ:CEN2
            cB7   : 'ᚷ:GYFU',                  // ᚷ:GYFU
            cB8   : 'ᚸ:GAR<非公式>',           // ᚸ:GAR<Unofficial>
            cB9   : 'ᚹ:WYNN',                  // ᚹ:WYNN
            cBB   : 'ᚻ:HAEGL',                 // ᚻ:HAEGL
            cBB_2 : 'ᚻ:HAEGL2',                // ᚻ:HAEGL2
            cBE   : 'ᚾ:NAUD',                  // ᚾ:NAUD
            cC1   : 'ᛁ:ISS',                   // ᛁ:ISS
            cC4   : 'ᛄ:GER',                   // ᛄ:GER
            cC7   : 'ᛇ:YL<非公式>',            // ᛇ:YL<Unofficial>
            cC8   : 'ᛈ:PEORTH',                // ᛈ:PEORTH
            cC9   : 'ᛉ:EOLHX',                 // ᛉ:EOLHX
            cCB   : 'ᛋ:SIGEL',                 // ᛋ:SIGEL
            cCB_2 : 'ᛋ:SIGEL2',                // ᛋ:SIGEL2
            cCF   : 'ᛏ:TYR',                   // ᛏ:TYR
            cD2   : 'ᛒ:BEORC',                 // ᛒ:BEORC
            cD6   : 'ᛖ:EH',                    // ᛖ:EH
            cD7   : 'ᛗ:MAN',                   // ᛗ:MAN
            cDA   : 'ᛚ:LOGR',                  // ᛚ:LOGR
            cDD   : 'ᛝ:ING',                   // ᛝ:ING
            cDE   : 'ᛞ:DAEG',                  // ᛞ:DAEG
            cDF   : 'ᛟ:ETHEL',                 // ᛟ:ETHEL
            cE0   : 'ᛠ:EAR<非公式>',           // ᛠ:EAR<Unofficial>
            cE1   : 'ᛡ:IOR<非公式>',           // ᛡ:IOR<Unofficial>
            cE2   : 'ᛢ:CWEORTH<非公式>',       // ᛢ:CWEORTH<Unofficial>
            cE3   : 'ᛣ:CALC<非公式>',          // ᛣ:CALC<Unofficial>
            cE4   : 'ᛤ:CEALC<非公式>',         // ᛤ:CEALC<Unofficial>
            cE5   : 'ᛥ:STAN<非公式>',          // ᛥ:STAN<Unofficial>
            cE5_2 : 'ᛥ:STAN2<非公式>',         // ᛥ:STAN2<Unofficial>
        },
        message: {  // メッセージ
            sizeInvalid: '画像サイズ数を{miniPix}px～1000pxで入力してください。',               // 画像サイズ不正時のエラーメッセージ
        },

    },
};

/** Vue.js i18n用データ */
const i18n = VueI18n.createI18n({
    locale:         'ja',           // ロケールをセット
    fallbackLocale: 'en',           // フォールバックロケールをセット
    messages:       i18nResource,   // ロケールメッセージをセット
});

/** Vue.jsオブジェクト */
const appData = {

    /** バインドデータ */
    data() {
        return {

            // 画像サイズの最小値(px)
            MINIMUM_IMAGE_SIZE: 50,

            // ルーン情報
            runeChars: [
                { value: 'A0',   official: true,  text: this.$t('rune.cA0')   },        // ᚠ:FEOH
                { value: 'A2',   official: true,  text: this.$t('rune.cA2')   },        // ᚢ:UR
                { value: 'A3',   official: false, text: this.$t('rune.cA3')   },        // ᚣ:YR<Unofficial>
                { value: 'A6',   official: true,  text: this.$t('rune.cA6')   },        // ᚦ:THORN
                { value: 'A8',   official: true,  text: this.$t('rune.cA8')   },        // ᚨ:ANSUZ
                { value: 'A9',   official: true,  text: this.$t('rune.cA9')   },        // ᚩ:OS
                { value: 'AA',   official: false, text: this.$t('rune.cAA')   },        // ᚪ:AC<Unofficial>
                { value: 'B1',   official: true,  text: this.$t('rune.cB1')   },        // ᚱ:REID
                { value: 'B2',   official: true,  text: this.$t('rune.cB2')   },        // ᚲ:KAUNA
                { value: 'B3',   official: true,  text: this.$t('rune.cB3')   },        // ᚳ:CEN
                { value: 'B3_2', official: true,  text: this.$t('rune.cB3_2') },        // ᚳ:CEN2
                { value: 'B7',   official: true,  text: this.$t('rune.cB7')   },        // ᚷ:GYFU
                { value: 'B8',   official: false, text: this.$t('rune.cB8')   },        // ᚸ:GAR<Unofficial>
                { value: 'B9',   official: true,  text: this.$t('rune.cB9')   },        // ᚹ:WYNN
                { value: 'BB',   official: true,  text: this.$t('rune.cBB')   },        // ᚻ:HAEGL
                { value: 'BB_2', official: true,  text: this.$t('rune.cBB_2') },        // ᚻ:HAEGL2
                { value: 'BE',   official: true,  text: this.$t('rune.cBE')   },        // ᚾ:NAUD
                { value: 'C1',   official: true,  text: this.$t('rune.cC1')   },        // ᛁ:ISS
                { value: 'C4',   official: true,  text: this.$t('rune.cC4')   },        // ᛄ:GER
                { value: 'C7',   official: false, text: this.$t('rune.cC7')   },        // ᛇ:YL<Unofficial>
                { value: 'C8',   official: true,  text: this.$t('rune.cC8')   },        // ᛈ:PEORTH
                { value: 'C9',   official: true,  text: this.$t('rune.cC9')   },        // ᛉ:EOLHX
                { value: 'CB',   official: true,  text: this.$t('rune.cCB')   },        // ᛋ:SIGEL
                { value: 'CB_2', official: true,  text: this.$t('rune.cCB_2') },        // ᛋ:SIGEL2
                { value: 'CF',   official: true,  text: this.$t('rune.cCF')   },        // ᛏ:TYR
                { value: 'D2',   official: true,  text: this.$t('rune.cD2')   },        // ᛒ:BEORC
                { value: 'D6',   official: true,  text: this.$t('rune.cD6')   },        // ᛖ:EH
                { value: 'D7',   official: true,  text: this.$t('rune.cD7')   },        // ᛗ:MAN
                { value: 'DA',   official: true,  text: this.$t('rune.cDA')   },        // ᛚ:LOGR
                { value: 'DD',   official: true,  text: this.$t('rune.cDD')   },        // ᛝ:ING
                { value: 'DE',   official: true,  text: this.$t('rune.cDE')   },        // ᛞ:DAEG
                { value: 'DF',   official: true,  text: this.$t('rune.cDF')   },        // ᛟ:ETHEL
                { value: 'E0',   official: false, text: this.$t('rune.cE0')   },        // ᛠ:EAR<Unofficial>
                { value: 'E1',   official: false, text: this.$t('rune.cE1')   },        // ᛡ:IOR<Unofficial>
                { value: 'E2',   official: false, text: this.$t('rune.cE2')   },        // ᛢ:CWEORTH<Unofficial>
                { value: 'E3',   official: false, text: this.$t('rune.cE3')   },        // ᛣ:CALC<Unofficial>
                { value: 'E4',   official: false, text: this.$t('rune.cE4')   },        // ᛤ:CEALC<Unofficial>
                { value: 'E5',   official: false, text: this.$t('rune.cE5')   },        // ᛥ:STAN<Unofficial>
                { value: 'E5_2', official: false, text: this.$t('rune.cE5_2') },        // ᛥ:STAN2<Unofficial>
            ],

            // ルーン1情報
            rune1: {

                // 選択ルーン
                selected: 'DD',

                // ルーン色
                color: '#00ffff',

                // ミラー有無
                isMirror: false,
            },

            // ルーン2情報
            rune2: {

                // 選択ルーン
                selected: 'B7',

                // ルーン色
                color: '#ff00ff',

                // ミラー有無
                isMirror: false,
            },

            // ルーン配列)(将来のテンプレート活用時用)
            runeAry: [],

            // 背景色
            bgcolor: '#191970',

            // 交差色
            lapcolor: '#FFFFFF',

            // 画像サイズ
            imgSize: 300,

            // 画像サイズ入力欄エラーフラグ
            invalidImgSize: false,

            // リアルタイム描写
            isRealtime: true,

            // 非公式ルーンの表示設定
            showUnofficial: false,

            // 表示位置左／中央／右
            radHPos: 'center',

            // 最終表示用画像
            tempCanvas2: null,
        };
    },
    /** mountedイベント */
    mounted: function () {

        // 言語判定(日本語であるか)
        if (navigator.language == 'ja' ||
            navigator.language == 'ja-JP')
        {
            this.$i18n.locale = 'ja';
        } else {
            this.$i18n.locale = 'en';
        }

        // タイトル変更
        document.title = this.$t('label.title');

        // ルーン文字SVG取得
        runeChars = {
            A0  :this.$refs.SVG_A0 ,    // ᚠ:FEOH
            A2  :this.$refs.SVG_A2 ,    // ᚢ:UR
            A3  :this.$refs.SVG_A3 ,    // ᚣ:YR
            A6  :this.$refs.SVG_A6 ,    // ᚦ:THORN
            A8  :this.$refs.SVG_A8 ,    // ᚨ:ANSUZ
            A9  :this.$refs.SVG_A9 ,    // ᚩ:OS
            AA  :this.$refs.SVG_AA ,    // ᚪ:AC<Unofficial>
            B1  :this.$refs.SVG_B1 ,    // ᚱ:REID
            B2  :this.$refs.SVG_B2 ,    // ᚲ:KAUNA
            B3  :this.$refs.SVG_B3 ,    // ᚳ:CEN1
            B3_2:this.$refs.SVG_B3_2,   // ᚳ:CEN2
            B7  :this.$refs.SVG_B7 ,    // ᚷ:GYFU
            B8  :this.$refs.SVG_B8 ,    // ᚸ:GAR<Unofficial>
            B9  :this.$refs.SVG_B9 ,    // ᚹ:WYNN
            BB  :this.$refs.SVG_BB ,    // ᚻ:HAEGL<Unofficial>
            BB_2:this.$refs.SVG_BB_2,   // ᚻ:HAEGL2<Unofficial>
            BE  :this.$refs.SVG_BE ,    // ᚾ:NAUD
            C1  :this.$refs.SVG_C1 ,    // ᛁ:ISS
            C4  :this.$refs.SVG_C4 ,    // ᛄ:GER
            C7  :this.$refs.SVG_C7 ,    // ᛇ:YL<Unofficial>
            C8  :this.$refs.SVG_C8 ,    // ᛈ:PEORTH
            C9  :this.$refs.SVG_C9 ,    // ᛉ:EOLHX
            CB  :this.$refs.SVG_CB ,    // ᛋ:SIGEL
            CB_2:this.$refs.SVG_CB_2,   // ᛋ:SIGEL2
            CF  :this.$refs.SVG_CF ,    // ᛏ:TYR
            D2  :this.$refs.SVG_D2 ,    // ᛒ:BEORC
            D6  :this.$refs.SVG_D6 ,    // ᛖ:EH
            D7  :this.$refs.SVG_D7 ,    // ᛗ:MAN
            DA  :this.$refs.SVG_DA ,    // ᛚ:LOGR
            DD  :this.$refs.SVG_DD ,    // ᛝ:ING
            DE  :this.$refs.SVG_DE ,    // ᛞ:DAEG
            DF  :this.$refs.SVG_DF ,    // ᛟ:ETHEL
            E0  :this.$refs.SVG_E0 ,    // ᛠ:EAR<Unofficial>
            E1  :this.$refs.SVG_E1 ,    // ᛡ:IOR<Unofficial>
            E2  :this.$refs.SVG_E2 ,    // ᛢ:CWEORTH<Unofficial>
            E3  :this.$refs.SVG_E3 ,    // ᛣ:CALC<Unofficial>
            E4  :this.$refs.SVG_E4 ,    // ᛤ:CEALC<Unofficial>
            E5  :this.$refs.SVG_E5 ,    // ᛥ:STAN<Unofficial>
            E5_2:this.$refs.SVG_E5_2,   // ᛥ:SAN2<KUnofficial>
        };

        // ルーン配列構築
        this.runeAry.push(this.rune1);
        this.runeAry.push(this.rune2);

        // Collapseオブジェクト生成
        backgroudCllapse = new bootstrap.Collapse(this.$refs.collapse3, {
            toggle: false
        });

        // TODO : // 初期表示用に生成ボタン押下
        // TODO : this.$nextTick(function () {
        // TODO :     this.generate_onclick();
        // TODO : });
    },

    /** 算出プロパティ */
    computed: {

        // 画像サイズ補正後数値
        compImageSize: function () {

            // 最小サイズ未満であれば最小サイズを返却
            if (this.imgSize < this.MINIMUM_IMAGE_SIZE) {
                return this.MINIMUM_IMAGE_SIZE;
            }

            // それ以外は入力値を返却
            return this.imgSize;
        },
    },

    /** その他メソッド類 */
    methods: {

        /**
         * Generateボタン押下時処理
         */
        generate_onclick: function () {

            ////////////////////////////////
            //////// エラーチェック ////////
            ////////////////////////////////
            // ピクセル数が入力されていない場合
            if (isNaN(this.imgSize)) {
                this.invalidImgSize = true;

                // Backgroud の Accordion を開いた状態にする
                backgroudCllapse.show();

            // 数値である場合(0x12なども含む)10進数値に直すためNumberを通す
            } else {
                this.imgSize = Number(this.imgSize);
                this.invalidImgSize = false;
            }
            // 数値が最小サイズ未満の場合 同様にエラーとする
            if (this.imgSize < this.MINIMUM_IMAGE_SIZE) {
                this.invalidImgSize = true;

                // Backgroud の Accordion を開いた状態にする
                backgroudCllapse.show();
            }
            // エラーの場合ここで処理終了
            if (this.invalidImgSize) {
                return;
            }

            ////////////////////////////////
            //////// 画面入力価取得 ////////
            ////////////////////////////////
            // 画面入力価取得
            const hPostLeft  = (this.radHPos == 'left');   // 水平位置左
            const hPostRight = (this.radHPos == 'right');  // 水平位置右

            // 1文字目と2文字目のルーンのSVGを特定
            const rune1ele = runeChars[this.rune1.selected];    // ルーン1文字目の文字
            const rune2ele = runeChars[this.rune2.selected];    // ルーン2文字目の文字

            //////////////////////////////////
            //////// ルーン画像生成部 ////////
            //////////////////////////////////

            // ルーンの表示位置を決定(将来位置を変更する時用)
            const imgLeft = 0;
            const imgTop  = 0;
    
            // ルーンのサイズを決定
            const imgWidth  = this.imgSize;
            const imgHeight = imgWidth;
            rune1ele.width  = imgWidth;
            rune1ele.height = imgHeight;
            rune2ele.width  = imgWidth;
            rune2ele.height = imgHeight;
    
            // 1文字目のルーン描画
            const rune1canvas = this.$refs.rune1Canvas;
            this.drawRune(rune1Canvas, imgWidth, imgHeight, rune1ele, this.rune1.color, this.rune1.isMirror);
    
            // 2文字目のルーン描画
            const rune2canvas = this.$refs.rune2Canvas;
            this.drawRune(rune2Canvas, imgWidth, imgHeight, rune2ele, this.rune2.color, this.rune2.isMirror);
    
            // ルーンの重なり部分を描画
            const runeLapCanvas = this.$refs.runeLapCanvas;
            runeLapCanvas.width  = imgWidth;
            runeLapCanvas.height = imgHeight;
            const runeLapContext = runeLapCanvas.getContext('2d');
            this.drawImageMirror(runeLapContext, rune1ele, imgLeft, imgTop, imgWidth, imgHeight, this.rune1.isMirror);   // ルーン1文字目の形をSVGで描画
            runeLapContext.globalCompositeOperation = 'source-in';                                                       // 合成形式をsource-in(AND)に設定

            // ルーン2をミラーさせる場合 ミラーする
            this.drawImageMirror(runeLapContext, rune2ele, imgLeft, imgTop, imgWidth, imgHeight, this.rune2.isMirror);   // ルーン2文字目の形をSVGで描画
            runeLapContext.globalCompositeOperation = 'source-in';                                                       // 合成形式をsource-in(AND)に設定
            runeLapContext.fillStyle = this.lapcolor;                                                                    // ルーン1文字目と2文字目の重なり部分の色を適用
            runeLapContext.fillRect(imgLeft, imgTop, imgWidth, imgHeight);                                               // ルーン1文字目と2文字目の重なり部分の形が残るようにキャンバス全体を塗りつぶす
    
            // アウトプットに1文字目＋2文字目のルーン描画
            const tempCanvas = this.$refs.tempCanvas;
            tempCanvas.width  = imgWidth;
            tempCanvas.height = imgHeight;
            const context    = tempCanvas.getContext('2d');
            context.fillStyle = this.bgcolor;                               // 背景色設定
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

            // TODO : Canvasの内容をImageタグに転送
            this.$refs.tempCanvas2.src = tempCanvas.toDataURL('image/png');

            /////////////////////////////////
            //////// ルーンSVG生成部 ////////
            /////////////////////////////////

            // TODO : Generate後保存できるようにする

        },

        // 非公式ルーン表示判定処理
        judgeShowRune: function (rune) {

            // ルーンが公式ルーンの場合常に表示
            if (rune.official) {
                return true;
            }

            // (非公式ルーンの場合)非公式ルーンの表示有無を以て表示判定
            return this.showUnofficial;
        },

        // 選択しているルーンの表示文字探索
        showSelectedRuneText: function (selected) {

            // 選択値に合致する表示文字列を返却
            let selectedText = '';
            this.runeChars.forEach(function(rune) {
                if(rune.value == selected) {
                    selectedText = rune.text;
                }
            });
            return selectedText;
        },

        /**
         * ルーン描画
         */
        drawRune : function (destRuneCanvas,
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
            this.drawImageMirror(runeContext, runeEle, 0, 0, width, height, runeMirror);     // ルーン文字の形をSVGで描画
            runeContext.globalCompositeOperation = 'source-in';                              // 合成形式をsource-in(AND)に設定
            runeContext.fillStyle = runeColor;                                               // ルーン文字の色を適用
            runeContext.fillRect(0, 0, width, height);                                       // ルーン文字の形が残るようにキャンバス全体を塗りつぶす
        },

        /** 
         * ミラー描画 
         */
        drawImageMirror : function (context,
                                    ele,
                                    left,
                                    top,
                                    width,
                                    height,
                                    mirror)
        {

            // ミラーさせる場合 ミラーする
            if (mirror) {
                context.scale(-1, 1);
                context.translate(-width, 0);
            }

            // 指定したキャンバスにルーン描画
            context.drawImage(ele, left, top, width, height);   // ルーン文字の形をSVGで描画

            // ミラーさせる場合 ミラーする
            if (mirror) {
                context.scale(-1, 1);
                context.translate(-width, 0);
            }
        },

        /**
         * リアルタイム変更イベント
         */
        onchange_input : function () {

            // Real time無効の場合何も実行しない
            if (!this.isRealtime) {
                return;
            }

            // Real time有効の場合 Generate実行
            this.generate_onclick();
        },

    },
};

// Vue.jsインスタンス生成＋プラグイン設定＋開始
const app = Vue.createApp(appData)
app.use(i18n);
app.mount('#body');
