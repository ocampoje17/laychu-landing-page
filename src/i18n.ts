import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const supportedLanguages = ['en', 'vi', 'zh-CN', 'ja', 'ko', 'es', 'fr'] as const
export type SupportedLanguage = (typeof supportedLanguages)[number]

export const LANGUAGE_STORAGE_KEY = 'namhnz-language'

const savedLanguage =
  typeof window === 'undefined' ? null : window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
const initialLanguage = supportedLanguages.includes(savedLanguage as SupportedLanguage)
  ? (savedLanguage as SupportedLanguage)
  : 'en'

const resources = {
  en: {
    translation: {
      metadata: {
        title: 'namhnz | Apps',
        description: 'A collection of practical personal apps by namhnz.',
      },
      hero: {
        productLanding: 'Product landing page',
        description: 'A collection of personal apps built for specific, everyday needs.',
        products: 'View products',
        productsHint: 'View the product list below',
        contact: 'Contact',
        contactHint: 'Jump to the contact section',
      },
      products: {
        kicker: 'Products',
        title: 'Apps for every screen',
        description: 'Clear, practical, and easy to use—organized by the way you use them.',
        explore: 'Explore product',
        open: 'Open {{title}}',
        crossPlatform: 'Cross-platform',
      },
      platforms: {
        desktop: { title: 'Desktop', description: 'Windows apps for focused work and everyday tasks.' },
        mobile: { title: 'Mobile', description: 'Apps that stay close to you on your phone.' },
        web: { title: 'Web', description: 'Useful tools that work right in your browser.' },
      },
      donate: {
        kicker: 'Buy me a coffee',
        title: 'If you find an app useful, buy me a coffee.',
        description: 'Your support helps me keep making better products every day.',
      },
      contact: {
        kicker: 'Contact',
        title: 'Want to discuss a product or work with namhnz?',
        description: 'The quickest way to start is Gmail or Telegram.',
        via: 'Contact via {{channel}}',
      },
      footer: {
        description: 'A landing page for namhnz products',
        madeWithLove: 'Made with love by namhnz',
        apps: 'namhnz apps · laychu.com',
      },
      theme: { light: 'Light', dark: 'Dark', system: 'System', switchTo: 'Switch to {{theme}} mode' },
      language: { label: 'Language', choose: 'Choose language', change: 'Change language', close: 'Close language menu' },
      analytics: {
        title: 'Help improve namhnz apps',
        description: 'Allow anonymous analytics to understand which products visitors explore. No personal contact details are sent.',
        accept: 'Allow analytics',
        decline: 'Decline',
        settings: 'Analytics settings',
      },
      productsData: {
        instantTranslate: { teaser: 'Instant translation across Windows.', description: 'A Windows-only app that quickly translates what you are typing into another language across all Windows apps.', label: 'Windows utility' },
        documentWallet: { teaser: 'Your personal documents, 100% offline.', description: 'An app for managing personal documents that stores everything 100% offline, so your data stays private.', label: '100% offline' },
        semit: { teaser: 'A widget for upcoming milestones.', description: 'Remember upcoming milestones and keep a phone widget on screen so important dates stay in view.', label: 'Phone widget' },
        pdfConverter: { teaser: 'Turn PDFs into text or .docx on Windows.', description: 'A native Windows app that converts PDFs to text or .docx, works well with Vietnamese, and keeps all data offline on your computer.', label: 'Offline & private' },
        projectsRunner: { teaser: 'Save, organize, and rerun familiar commands.', description: 'A desktop app for storing, organizing, and rerunning commands across projects instead of searching old notes, terminal history, or messages.', label: 'Desktop commands' },
        shoppingList: { teaser: 'Choose Shopee products faster and more easily.', description: 'A website that makes it easier to choose products to buy on Shopee.', label: 'Shopee web' },
        mockExam: { teaser: 'Study effectively and conquer every exam.', description: 'A simple, powerful quiz tool for computer and phone that helps you review exams, save results, and improve every day.', label: 'Minimal quizzes' },
        imageCropper: { teaser: 'Crop, resize, compress, and convert in your browser.', description: 'A web tool to crop, resize, compress, and convert images entirely in the browser—quickly and without installing anything.', label: 'Image tool' },
      },
    },
  },
  vi: {
    translation: {
      metadata: { title: 'namhnz | Các ứng dụng', description: 'Bộ ứng dụng cá nhân thực dụng của namhnz.' },
      hero: { productLanding: 'Trang giới thiệu sản phẩm', description: 'Bộ ứng dụng cá nhân được xây dựng để giải quyết những nhu cầu rất cụ thể, hàng ngày.', products: 'Xem sản phẩm', productsHint: 'Xem danh sách sản phẩm bên dưới', contact: 'Liên hệ', contactHint: 'Di chuyển đến phần liên hệ' },
      products: { kicker: 'Sản phẩm', title: 'Ứng dụng cho mọi màn hình', description: 'Rõ ràng, thực dụng và dễ dùng — được sắp xếp theo cách bạn sử dụng.', explore: 'Khám phá sản phẩm', open: 'Mở {{title}}', crossPlatform: 'Đa nền tảng' },
      platforms: { desktop: { title: 'Desktop', description: 'Ứng dụng Windows cho công việc tập trung và nhu cầu hằng ngày.' }, mobile: { title: 'Mobile', description: 'Ứng dụng luôn đồng hành cùng bạn trên điện thoại.' }, web: { title: 'Web', description: 'Công cụ hữu ích hoạt động ngay trên trình duyệt.' } },
      donate: { kicker: 'Mời cà phê', title: 'Nếu bạn thấy sản phẩm hữu ích, mời mình một ly cà phê nhé.', description: 'Sự ủng hộ của bạn là động lực để mình tiếp tục tạo ra sản phẩm tốt hơn mỗi ngày.' },
      contact: { kicker: 'Liên hệ', title: 'Muốn trao đổi về sản phẩm hoặc hợp tác cùng namhnz?', description: 'Có thể bắt đầu nhanh qua Gmail hoặc Telegram.', via: 'Liên hệ qua {{channel}}' },
      footer: { description: 'Landing page giới thiệu sản phẩm của namhnz', madeWithLove: 'Made with love by namhnz', apps: 'namhnz apps · laychu.com' },
      theme: { light: 'Sáng', dark: 'Tối', system: 'Tự động', switchTo: 'Chuyển sang chế độ {{theme}}' },
      language: { label: 'Ngôn ngữ', choose: 'Chọn ngôn ngữ', change: 'Đổi ngôn ngữ', close: 'Đóng menu ngôn ngữ' },
      analytics: { title: 'Giúp cải thiện ứng dụng namhnz', description: 'Cho phép phân tích ẩn danh để hiểu sản phẩm nào được quan tâm. Không gửi thông tin liên hệ cá nhân.', accept: 'Cho phép phân tích', decline: 'Từ chối', settings: 'Cài đặt Analytics' },
      productsData: {
        instantTranslate: { teaser: 'Dịch tức thì trên toàn bộ Windows.', description: 'Ứng dụng chỉ dành cho Windows, giúp dịch nhanh nội dung đang gõ sang ngôn ngữ khác và hoạt động xuyên suốt với toàn bộ app trên Windows.', label: 'Tiện ích Windows' },
        documentWallet: { teaser: 'Giấy tờ cá nhân, offline 100%.', description: 'Ứng dụng quản lý giấy tờ cá nhân, lưu trữ offline 100% để dữ liệu của bạn luôn riêng tư.', label: 'Offline 100%' },
        semit: { teaser: 'Widget nhắc nhớ các cột mốc sắp tới.', description: 'Ghi nhớ các cột mốc sắp tới và tạo widget trên màn hình điện thoại để bạn luôn chú ý đến những mốc quan trọng.', label: 'Widget điện thoại' },
        pdfConverter: { teaser: 'Chuyển PDF sang chữ hoặc .docx ngay trên Windows.', description: 'Ứng dụng Windows native chuyển PDF sang chữ hoặc .docx, hoạt động tốt với tiếng Việt và lưu toàn bộ dữ liệu offline trên máy bạn.', label: 'Offline & bảo mật' },
        projectsRunner: { teaser: 'Lưu, sắp xếp và chạy lại các lệnh quen dùng.', description: 'Ứng dụng desktop giúp lưu, tổ chức và chạy lại command ở nhiều project thay vì tìm lại ghi chú, lịch sử terminal hay tin nhắn cũ.', label: 'Lệnh desktop' },
        shoppingList: { teaser: 'Chọn sản phẩm Shopee nhanh và dễ hơn.', description: 'Trang web giúp bạn lựa chọn sản phẩm mua sắm từ Shopee một cách dễ dàng hơn.', label: 'Web Shopee' },
        mockExam: { teaser: 'Ôn thi hiệu quả, chinh phục mọi kỳ thi.', description: 'Công cụ trắc nghiệm tối giản, mạnh mẽ trên máy tính và điện thoại, giúp bạn ôn đề, lưu kết quả và tiến bộ mỗi ngày.', label: 'Trắc nghiệm tối giản' },
        imageCropper: { teaser: 'Crop, resize, nén và chuyển định dạng ngay trên trình duyệt.', description: 'Công cụ web crop, resize, nén và chuyển định dạng ảnh hoàn toàn trên trình duyệt, nhanh gọn và không cần cài đặt.', label: 'Công cụ ảnh' },
      },
    },
  },
  'zh-CN': {
    translation: {
      metadata: { title: 'namhnz | 应用程序', description: 'namhnz 的实用个人应用集合。' },
      hero: { productLanding: '产品落地页', description: '为解决具体日常需求而打造的个人应用集合。', products: '查看产品', productsHint: '查看下方产品列表', contact: '联系', contactHint: '跳转到联系部分' },
      products: { kicker: '产品', title: '适用于各种屏幕的应用', description: '清晰、实用、易用，并按使用方式分类。', explore: '探索产品', open: '打开 {{title}}', crossPlatform: '跨平台' },
      platforms: { desktop: { title: '桌面端', description: '适用于专注工作和日常任务的 Windows 应用。' }, mobile: { title: '移动端', description: '随时陪伴您的手机应用。' }, web: { title: '网页端', description: '直接在浏览器中运行的实用工具。' } },
      donate: { kicker: '请我喝咖啡', title: '如果产品对您有帮助，请我喝杯咖啡吧。', description: '您的支持帮助我每天持续打造更好的产品。' },
      contact: { kicker: '联系', title: '想讨论产品或与 namhnz 合作？', description: '最快的方式是通过 Gmail 或 Telegram 联系。', via: '通过 {{channel}} 联系' },
      footer: { description: 'namhnz 产品落地页', madeWithLove: 'Made with love by namhnz', apps: 'namhnz apps · laychu.com' },
      theme: { light: '浅色', dark: '深色', system: '跟随系统', switchTo: '切换到{{theme}}模式' },
      language: { label: '语言', choose: '选择语言', change: '更改语言', close: '关闭语言菜单' },
      analytics: { title: '帮助改进 namhnz 应用', description: '允许匿名分析，以了解访客探索哪些产品。不会发送个人联系信息。', accept: '允许分析', decline: '拒绝', settings: '分析设置' },
      productsData: {
        instantTranslate: { teaser: '在整个 Windows 中即时翻译。', description: '一款仅限 Windows 的应用，可将正在输入的内容快速翻译成另一种语言，并适用于所有 Windows 应用。', label: 'Windows 工具' },
        documentWallet: { teaser: '个人证件，100% 离线。', description: '管理个人证件的应用，所有数据 100% 离线存储，保护您的隐私。', label: '100% 离线' },
        semit: { teaser: '即将到来的重要日期提醒小组件。', description: '记录即将到来的重要日期，并在手机屏幕上显示小组件。', label: '手机小组件' },
        pdfConverter: { teaser: '在 Windows 上将 PDF 转为文本或 .docx。', description: 'Windows 原生应用，可将 PDF 转换为文本或 .docx，支持越南语，所有数据仅保存在您的电脑上。', label: '离线且私密' },
        projectsRunner: { teaser: '保存、整理并重新运行常用命令。', description: '桌面应用可跨项目保存、整理和重新运行命令，无需翻找旧笔记、终端历史或消息。', label: '桌面命令' },
        shoppingList: { teaser: '更快、更轻松地选择 Shopee 商品。', description: '帮助您更轻松选择 Shopee 购物商品的网站。', label: 'Shopee 网页' },
        mockExam: { teaser: '高效学习，攻克每一场考试。', description: '适用于电脑和手机的简洁强大测验工具，帮助复习试题、保存结果并每天进步。', label: '极简测验' },
        imageCropper: { teaser: '在浏览器中裁剪、调整、压缩和转换图片。', description: '完全在浏览器中裁剪、调整大小、压缩和转换图片的网页工具，无需安装。', label: '图片工具' },
      },
    },
  },
  ja: {
    translation: {
      metadata: { title: 'namhnz | アプリ', description: 'namhnz による実用的な個人向けアプリ集。' },
      hero: { productLanding: 'プロダクト紹介ページ', description: '日々の具体的なニーズを解決するために作られた個人向けアプリ集です。', products: '製品を見る', productsHint: '下の製品一覧を見る', contact: 'お問い合わせ', contactHint: 'お問い合わせセクションへ移動' },
      products: { kicker: '製品', title: 'あらゆる画面のためのアプリ', description: 'わかりやすく、実用的で、使いやすい。使い方ごとにまとめました。', explore: '製品を見る', open: '{{title}} を開く', crossPlatform: 'クロスプラットフォーム' },
      platforms: { desktop: { title: 'デスクトップ', description: '集中作業や日常のタスクのための Windows アプリ。' }, mobile: { title: 'モバイル', description: 'スマートフォンでいつもそばにあるアプリ。' }, web: { title: 'ウェブ', description: 'ブラウザですぐに使える便利なツール。' } },
      donate: { kicker: 'コーヒーをごちそう', title: 'アプリが役立ったら、コーヒーを一杯ごちそうしてください。', description: '皆さまの支援が、より良い製品を作り続ける力になります。' },
      contact: { kicker: 'お問い合わせ', title: '製品について話したい、または namhnz と協業したいですか？', description: 'Gmail または Telegram からすぐに始められます。', via: '{{channel}} で連絡する' },
      footer: { description: 'namhnz 製品のランディングページ', madeWithLove: 'Made with love by namhnz', apps: 'namhnz apps · laychu.com' },
      theme: { light: 'ライト', dark: 'ダーク', system: 'システム', switchTo: '{{theme}} モードに切り替え' },
      language: { label: '言語', choose: '言語を選択', change: '言語を変更', close: '言語メニューを閉じる' },
      analytics: { title: 'namhnz アプリの改善にご協力ください', description: '訪問者がどの製品を見ているかを匿名で分析することを許可します。個人の連絡先情報は送信されません。', accept: '分析を許可', decline: '拒否', settings: '分析設定' },
      productsData: {
        instantTranslate: { teaser: 'Windows 全体で瞬時に翻訳。', description: '入力中の内容を別の言語へすばやく翻訳し、すべての Windows アプリで使える Windows 専用アプリです。', label: 'Windows ユーティリティ' },
        documentWallet: { teaser: '個人書類を 100% オフラインで。', description: '個人書類を管理するアプリです。すべてオフラインに保存され、プライバシーを守ります。', label: '100% オフライン' },
        semit: { teaser: '予定の節目を知らせるウィジェット。', description: '近づく節目を記録し、重要な日を見逃さないようスマホ画面にウィジェットを表示します。', label: 'スマホウィジェット' },
        pdfConverter: { teaser: 'Windows で PDF をテキストまたは .docx に変換。', description: 'PDF をテキストまたは .docx に変換する Windows ネイティブアプリ。ベトナム語にも対応し、データは PC 内だけに保存されます。', label: 'オフライン・プライベート' },
        projectsRunner: { teaser: 'よく使うコマンドを保存、整理、再実行。', description: 'プロジェクトをまたいでコマンドを保存・整理・再実行できるデスクトップアプリです。', label: 'デスクトップコマンド' },
        shoppingList: { teaser: 'Shopee 商品をより速く簡単に選択。', description: 'Shopee で購入する商品をより簡単に選べるウェブサイトです。', label: 'Shopee ウェブ' },
        mockExam: { teaser: '効果的に学び、あらゆる試験を攻略。', description: 'PC とスマホで使えるシンプルで強力なクイズツール。問題を復習し、結果を保存して毎日上達できます。', label: 'シンプルなクイズ' },
        imageCropper: { teaser: 'ブラウザで画像を切り抜き、リサイズ、圧縮、変換。', description: 'インストール不要で、ブラウザだけで画像の切り抜き、リサイズ、圧縮、変換ができるウェブツールです。', label: '画像ツール' },
      },
    },
  },
  ko: {
    translation: {
      metadata: { title: 'namhnz | 앱', description: 'namhnz의 실용적인 개인 앱 모음입니다.' },
      hero: { productLanding: '제품 랜딩 페이지', description: '구체적인 일상 요구를 해결하기 위해 만든 개인 앱 모음입니다.', products: '제품 보기', productsHint: '아래 제품 목록 보기', contact: '문의하기', contactHint: '문의 섹션으로 이동' },
      products: { kicker: '제품', title: '모든 화면을 위한 앱', description: '명확하고 실용적이며 사용하기 쉬운 앱을 사용 방식별로 정리했습니다.', explore: '제품 살펴보기', open: '{{title}} 열기', crossPlatform: '크로스 플랫폼' },
      platforms: { desktop: { title: '데스크톱', description: '집중 업무와 일상 작업을 위한 Windows 앱입니다.' }, mobile: { title: '모바일', description: '휴대폰에서 언제나 곁에 있는 앱입니다.' }, web: { title: '웹', description: '브라우저에서 바로 작동하는 유용한 도구입니다.' } },
      donate: { kicker: '커피 한 잔', title: '앱이 유용했다면 커피 한 잔을 보내 주세요.', description: '여러분의 응원이 더 좋은 제품을 계속 만드는 힘이 됩니다.' },
      contact: { kicker: '문의', title: '제품을 논의하거나 namhnz와 협업하고 싶으신가요?', description: 'Gmail 또는 Telegram으로 빠르게 시작할 수 있습니다.', via: '{{channel}}로 연락하기' },
      footer: { description: 'namhnz 제품 랜딩 페이지', madeWithLove: 'Made with love by namhnz', apps: 'namhnz apps · laychu.com' },
      theme: { light: '라이트', dark: '다크', system: '시스템', switchTo: '{{theme}} 모드로 전환' },
      language: { label: '언어', choose: '언어 선택', change: '언어 변경', close: '언어 메뉴 닫기' },
      analytics: { title: 'namhnz 앱 개선에 도움 주기', description: '방문자가 어떤 제품을 살펴보는지 익명 분석을 허용합니다. 개인 연락처 정보는 전송되지 않습니다.', accept: '분석 허용', decline: '거부' , settings: '분석 설정' },
      productsData: {
        instantTranslate: { teaser: 'Windows 전체에서 즉시 번역.', description: '입력 중인 내용을 다른 언어로 빠르게 번역하고 모든 Windows 앱에서 작동하는 Windows 전용 앱입니다.', label: 'Windows 유틸리티' },
        documentWallet: { teaser: '개인 문서를 100% 오프라인으로.', description: '개인 문서를 관리하는 앱으로 모든 데이터를 100% 오프라인에 저장해 개인정보를 보호합니다.', label: '100% 오프라인' },
        semit: { teaser: '다가오는 중요한 일을 알려 주는 위젯.', description: '다가오는 중요한 일정을 기억하고 휴대폰 화면 위젯으로 계속 확인할 수 있습니다.', label: '휴대폰 위젯' },
        pdfConverter: { teaser: 'Windows에서 PDF를 텍스트 또는 .docx로 변환.', description: 'PDF를 텍스트 또는 .docx로 바꾸는 Windows 네이티브 앱입니다. 베트남어를 잘 지원하며 모든 데이터는 PC에만 저장됩니다.', label: '오프라인 및 비공개' },
        projectsRunner: { teaser: '자주 쓰는 명령어를 저장, 정리, 재실행.', description: '이전 메모나 터미널 기록을 찾지 않고 여러 프로젝트의 명령어를 저장, 정리, 다시 실행하는 데스크톱 앱입니다.', label: '데스크톱 명령어' },
        shoppingList: { teaser: 'Shopee 상품을 더 빠르고 쉽게 선택.', description: 'Shopee에서 구매할 상품을 더 쉽게 선택하도록 돕는 웹사이트입니다.', label: 'Shopee 웹' },
        mockExam: { teaser: '효율적으로 공부하고 모든 시험을 정복하세요.', description: '컴퓨터와 휴대폰에서 쓰는 간결하고 강력한 퀴즈 도구로, 문제를 복습하고 결과를 저장하며 매일 발전할 수 있습니다.', label: '간결한 퀴즈' },
        imageCropper: { teaser: '브라우저에서 자르기, 크기 조절, 압축, 변환.', description: '설치 없이 브라우저에서 이미지 자르기, 크기 조절, 압축과 형식 변환을 하는 웹 도구입니다.', label: '이미지 도구' },
      },
    },
  },
  es: {
    translation: {
      metadata: { title: 'namhnz | Aplicaciones', description: 'Una colección de aplicaciones personales prácticas de namhnz.' },
      hero: { productLanding: 'Página de productos', description: 'Una colección de aplicaciones personales creadas para necesidades cotidianas concretas.', products: 'Ver productos', productsHint: 'Ver la lista de productos', contact: 'Contacto', contactHint: 'Ir a la sección de contacto' },
      products: { kicker: 'Productos', title: 'Aplicaciones para cada pantalla', description: 'Claras, prácticas y fáciles de usar, organizadas según cómo las utilizas.', explore: 'Explorar producto', open: 'Abrir {{title}}', crossPlatform: 'Multiplataforma' },
      platforms: { desktop: { title: 'Escritorio', description: 'Aplicaciones de Windows para trabajo concentrado y tareas cotidianas.' }, mobile: { title: 'Móvil', description: 'Aplicaciones que te acompañan en tu teléfono.' }, web: { title: 'Web', description: 'Herramientas útiles que funcionan directamente en el navegador.' } },
      donate: { kicker: 'Invítame a un café', title: 'Si una aplicación te resulta útil, invítame a un café.', description: 'Tu apoyo me ayuda a seguir creando mejores productos cada día.' },
      contact: { kicker: 'Contacto', title: '¿Quieres hablar sobre un producto o trabajar con namhnz?', description: 'La forma más rápida de empezar es Gmail o Telegram.', via: 'Contactar por {{channel}}' },
      footer: { description: 'Página de productos de namhnz', madeWithLove: 'Made with love by namhnz', apps: 'namhnz apps · laychu.com' },
      theme: { light: 'Claro', dark: 'Oscuro', system: 'Sistema', switchTo: 'Cambiar al modo {{theme}}' },
      language: { label: 'Idioma', choose: 'Elegir idioma', change: 'Cambiar idioma', close: 'Cerrar menú de idioma' },
      analytics: { title: 'Ayuda a mejorar las aplicaciones de namhnz', description: 'Permite análisis anónimos para saber qué productos exploran los visitantes. No se envían datos personales de contacto.', accept: 'Permitir análisis', decline: 'Rechazar', settings: 'Configuración de análisis' },
      productsData: {
        instantTranslate: { teaser: 'Traducción instantánea en todo Windows.', description: 'Una aplicación exclusiva para Windows que traduce rápidamente lo que escribes a otro idioma en todas las aplicaciones de Windows.', label: 'Utilidad de Windows' },
        documentWallet: { teaser: 'Tus documentos personales, 100% sin conexión.', description: 'Una aplicación para gestionar documentos personales que guarda todo 100% sin conexión para proteger tu privacidad.', label: '100% sin conexión' },
        semit: { teaser: 'Widget para próximos hitos.', description: 'Recuerda próximos hitos y muestra un widget en el teléfono para mantener las fechas importantes a la vista.', label: 'Widget de teléfono' },
        pdfConverter: { teaser: 'Convierte PDF a texto o .docx en Windows.', description: 'Aplicación nativa de Windows que convierte PDF a texto o .docx, funciona bien con vietnamita y mantiene todos los datos en tu ordenador.', label: 'Sin conexión y privado' },
        projectsRunner: { teaser: 'Guarda, organiza y vuelve a ejecutar comandos frecuentes.', description: 'Una aplicación de escritorio para guardar, organizar y repetir comandos entre proyectos.', label: 'Comandos de escritorio' },
        shoppingList: { teaser: 'Elige productos de Shopee más rápido y fácilmente.', description: 'Un sitio web que facilita elegir productos para comprar en Shopee.', label: 'Web de Shopee' },
        mockExam: { teaser: 'Estudia con eficacia y conquista cada examen.', description: 'Una herramienta de cuestionarios sencilla y potente para ordenador y teléfono que ayuda a repasar, guardar resultados y mejorar cada día.', label: 'Cuestionarios simples' },
        imageCropper: { teaser: 'Recorta, redimensiona, comprime y convierte en el navegador.', description: 'Una herramienta web para recortar, redimensionar, comprimir y convertir imágenes totalmente en el navegador, sin instalar nada.', label: 'Herramienta de imágenes' },
      },
    },
  },
  fr: {
    translation: {
      metadata: { title: 'namhnz | Applications', description: 'Une collection d’applications personnelles pratiques par namhnz.' },
      hero: { productLanding: 'Page de présentation des produits', description: 'Une collection d’applications personnelles conçues pour des besoins quotidiens précis.', products: 'Voir les produits', productsHint: 'Voir la liste des produits ci-dessous', contact: 'Contact', contactHint: 'Aller à la section contact' },
      products: { kicker: 'Produits', title: 'Des applications pour chaque écran', description: 'Claires, pratiques et simples à utiliser, organisées selon votre usage.', explore: 'Découvrir le produit', open: 'Ouvrir {{title}}', crossPlatform: 'Multiplateforme' },
      platforms: { desktop: { title: 'Bureau', description: 'Des applications Windows pour le travail concentré et les tâches quotidiennes.' }, mobile: { title: 'Mobile', description: 'Des applications qui vous accompagnent sur votre téléphone.' }, web: { title: 'Web', description: 'Des outils utiles qui fonctionnent directement dans le navigateur.' } },
      donate: { kicker: 'Offrez-moi un café', title: 'Si une application vous est utile, offrez-moi un café.', description: 'Votre soutien m’aide à continuer de créer de meilleurs produits chaque jour.' },
      contact: { kicker: 'Contact', title: 'Vous souhaitez parler d’un produit ou travailler avec namhnz ?', description: 'Le plus simple est de commencer par Gmail ou Telegram.', via: 'Contacter via {{channel}}' },
      footer: { description: 'Page de présentation des produits namhnz', madeWithLove: 'Made with love by namhnz', apps: 'namhnz apps · laychu.com' },
      theme: { light: 'Clair', dark: 'Sombre', system: 'Système', switchTo: 'Passer au mode {{theme}}' },
      language: { label: 'Langue', choose: 'Choisir la langue', change: 'Changer de langue', close: 'Fermer le menu de langue' },
      analytics: { title: 'Aidez à améliorer les applications namhnz', description: 'Autorisez des analyses anonymes pour comprendre quels produits les visiteurs explorent. Aucune coordonnée personnelle n’est envoyée.', accept: 'Autoriser les analyses', decline: 'Refuser', settings: 'Paramètres Analytics' },
      productsData: {
        instantTranslate: { teaser: 'Traduction instantanée dans tout Windows.', description: 'Une application uniquement pour Windows qui traduit rapidement ce que vous tapez vers une autre langue dans toutes les applications Windows.', label: 'Utilitaire Windows' },
        documentWallet: { teaser: 'Vos documents personnels, 100 % hors ligne.', description: 'Une application de gestion de documents personnels qui stocke tout 100 % hors ligne pour préserver votre confidentialité.', label: '100 % hors ligne' },
        semit: { teaser: 'Un widget pour les prochaines échéances.', description: 'Mémorisez les prochaines échéances et affichez un widget sur votre téléphone pour garder les dates importantes en vue.', label: 'Widget téléphone' },
        pdfConverter: { teaser: 'Convertissez des PDF en texte ou .docx sous Windows.', description: 'Une application Windows native qui convertit les PDF en texte ou .docx, fonctionne bien avec le vietnamien et conserve les données sur votre ordinateur.', label: 'Hors ligne et privé' },
        projectsRunner: { teaser: 'Enregistrez, organisez et relancez vos commandes habituelles.', description: 'Une application de bureau pour enregistrer, organiser et relancer des commandes entre plusieurs projets.', label: 'Commandes bureau' },
        shoppingList: { teaser: 'Choisissez des produits Shopee plus vite et plus facilement.', description: 'Un site web qui facilite le choix de produits à acheter sur Shopee.', label: 'Web Shopee' },
        mockExam: { teaser: 'Révisez efficacement et réussissez chaque examen.', description: 'Un outil de quiz simple et puissant pour ordinateur et téléphone, pour réviser, enregistrer les résultats et progresser chaque jour.', label: 'Quiz minimalistes' },
        imageCropper: { teaser: 'Recadrez, redimensionnez, compressez et convertissez dans le navigateur.', description: 'Un outil web pour recadrer, redimensionner, compresser et convertir des images entièrement dans le navigateur, sans installation.', label: 'Outil d’image' },
      },
    },
  },
} as const

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
})

export default i18n
