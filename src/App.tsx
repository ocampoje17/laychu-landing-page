import { useEffect, useState, type ComponentType, type SVGProps } from 'react'
import { Button, Chip, Surface, Text } from '@heroui/react'
import {
  ArrowTopRightOnSquareIcon,
  ComputerDesktopIcon,
  DocumentMagnifyingGlassIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  FolderOpenIcon,
  LanguageIcon,
  MoonIcon,
  PaperAirplaneIcon,
  ShoppingBagIcon,
  SunIcon,
} from '@heroicons/react/24/outline'
import { Squares2X2Icon } from '@heroicons/react/24/solid'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>
type ThemeMode = 'light' | 'dark' | 'system'

type AppLink = {
  title: string
  teaser: string
  description: string
  href: string
  label: string
  icon: IconComponent
  lightIconClassName: string
  darkIconClassName: string
  lightIconWrapClassName: string
  darkIconWrapClassName: string
  lightChipClassName: string
  darkChipClassName: string
  lightPanelClassName: string
  darkPanelClassName: string
  lightAccentClassName: string
  darkAccentClassName: string
  buttonClassName: string
}

type Contact = {
  label: string
  value: string
  href: string
  icon: IconComponent
}

const appLinks: AppLink[] = [
  {
    title: 'Instant Translate',
    teaser: 'Dịch tức thì trên toàn bộ Windows.',
    description:
      'Ứng dụng chỉ dành cho Windows, giúp dịch nhanh nội dung đang gõ sang ngôn ngữ khác và hoạt động xuyên suốt với toàn bộ các app trên Windows.',
    href: 'https://translate.laychu.com/',
    label: 'Windows utility',
    icon: LanguageIcon,
    lightIconClassName: 'text-teal-700',
    darkIconClassName: 'text-teal-200',
    lightIconWrapClassName: 'bg-teal-100',
    darkIconWrapClassName: 'bg-teal-500/18',
    lightChipClassName: 'bg-teal-50 text-teal-700',
    darkChipClassName: 'bg-teal-500/14 text-teal-200',
    lightPanelClassName:
      'bg-[linear-gradient(135deg,rgba(240,253,250,0.95),rgba(255,255,255,0.92))] border-teal-100/80',
    darkPanelClassName:
      'bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(6,78,59,0.38))] border-teal-500/18',
    lightAccentClassName: 'from-teal-300/70 via-emerald-200/40 to-transparent',
    darkAccentClassName: 'from-teal-400/20 via-emerald-300/12 to-transparent',
    buttonClassName: 'bg-teal-700 text-white',
  },
  {
    title: 'Ví Giấy Tờ',
    teaser: 'Giấy tờ cá nhân, offline 100%.',
    description:
      'Ứng dụng quản lý các giấy tờ cá nhân, lưu trữ offline 100% nên bạn có thể hoàn toàn yên tâm về tính bảo mật.',
    href: 'https://vigiayto.laychu.com/',
    label: 'Offline 100%',
    icon: DocumentMagnifyingGlassIcon,
    lightIconClassName: 'text-amber-700',
    darkIconClassName: 'text-amber-200',
    lightIconWrapClassName: 'bg-amber-100',
    darkIconWrapClassName: 'bg-amber-500/18',
    lightChipClassName: 'bg-amber-50 text-amber-700',
    darkChipClassName: 'bg-amber-500/14 text-amber-200',
    lightPanelClassName:
      'bg-[linear-gradient(135deg,rgba(255,251,235,0.96),rgba(255,255,255,0.92))] border-amber-100/80',
    darkPanelClassName:
      'bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(120,53,15,0.36))] border-amber-500/18',
    lightAccentClassName: 'from-amber-300/70 via-orange-200/40 to-transparent',
    darkAccentClassName: 'from-amber-400/18 via-orange-300/12 to-transparent',
    buttonClassName: 'bg-amber-600 text-white',
  },
  {
    title: 'SEMIT',
    teaser: 'Widget nhắc nhớ các cột mốc sắp tới.',
    description:
      'Ứng dụng ghi nhớ các cột mốc sắp tới và tạo widget trên màn hình điện thoại để bạn luôn chú ý vào những mốc quan trọng đó.',
    href: 'http://semit.laychu.com/',
    label: 'Widget điện thoại',
    icon: FolderOpenIcon,
    lightIconClassName: 'text-sky-700',
    darkIconClassName: 'text-sky-200',
    lightIconWrapClassName: 'bg-sky-100',
    darkIconWrapClassName: 'bg-sky-500/18',
    lightChipClassName: 'bg-sky-50 text-sky-700',
    darkChipClassName: 'bg-sky-500/14 text-sky-200',
    lightPanelClassName:
      'bg-[linear-gradient(135deg,rgba(240,249,255,0.96),rgba(255,255,255,0.92))] border-sky-100/80',
    darkPanelClassName:
      'bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(12,74,110,0.34))] border-sky-500/18',
    lightAccentClassName: 'from-sky-300/70 via-cyan-200/40 to-transparent',
    darkAccentClassName: 'from-sky-400/18 via-cyan-300/12 to-transparent',
    buttonClassName: 'bg-sky-700 text-white',
  },
  {
    title: 'Pdf Converter',
    teaser: 'Chuyển PDF sang chữ hoặc .docx ngay trên Windows.',
    description:
      'Ứng dụng native chỉ dành cho Windows, giúp chuyển đổi PDF nhanh chóng sang chữ hoặc file .docx, hoạt động tốt với tiếng Việt, offline 100% và toàn bộ dữ liệu chỉ nằm trên máy bạn.',
    href: 'https://pdf.laychu.com',
    label: 'Offline & bảo mật',
    icon: DocumentTextIcon,
    lightIconClassName: 'text-rose-700',
    darkIconClassName: 'text-rose-200',
    lightIconWrapClassName: 'bg-rose-100',
    darkIconWrapClassName: 'bg-rose-500/18',
    lightChipClassName: 'bg-rose-50 text-rose-700',
    darkChipClassName: 'bg-rose-500/14 text-rose-200',
    lightPanelClassName:
      'bg-[linear-gradient(135deg,rgba(255,241,242,0.96),rgba(255,255,255,0.92))] border-rose-100/80',
    darkPanelClassName:
      'bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(127,29,29,0.34))] border-rose-500/18',
    lightAccentClassName: 'from-rose-300/70 via-orange-200/35 to-transparent',
    darkAccentClassName: 'from-rose-400/18 via-orange-300/12 to-transparent',
    buttonClassName: 'bg-rose-700 text-white',
  },
  {
    title: 'List mua sắm',
    teaser: 'Chọn sản phẩm Shopee nhanh và dễ hơn.',
    description:
      'Trang web giúp bạn lựa chọn sản phẩm mua sắm từ Shopee một cách dễ dàng hơn.',
    href: 'https://listmuasam.laychu.com/',
    label: 'Shopee web',
    icon: ShoppingBagIcon,
    lightIconClassName: 'text-indigo-700',
    darkIconClassName: 'text-indigo-200',
    lightIconWrapClassName: 'bg-indigo-100',
    darkIconWrapClassName: 'bg-indigo-500/18',
    lightChipClassName: 'bg-indigo-50 text-indigo-700',
    darkChipClassName: 'bg-indigo-500/14 text-indigo-200',
    lightPanelClassName:
      'bg-[linear-gradient(135deg,rgba(238,242,255,0.96),rgba(255,255,255,0.92))] border-indigo-100/80',
    darkPanelClassName:
      'bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(49,46,129,0.34))] border-indigo-500/18',
    lightAccentClassName: 'from-indigo-300/70 via-violet-200/35 to-transparent',
    darkAccentClassName: 'from-indigo-400/18 via-violet-300/12 to-transparent',
    buttonClassName: 'bg-indigo-700 text-white',
  },
]

const contacts: Contact[] = [
  {
    label: 'Gmail',
    value: 'namqhong@gmail.com',
    href: 'mailto:namqhong@gmail.com',
    icon: EnvelopeIcon,
  },
  {
    label: 'Telegram',
    value: '@namhnz',
    href: 'https://t.me/namhnz',
    icon: PaperAirplaneIcon,
  },
]

const themeOptions: Array<{
  id: ThemeMode
  label: string
  icon: IconComponent
}> = [
  { id: 'light', label: 'Light', icon: SunIcon },
  { id: 'dark', label: 'Dark', icon: MoonIcon },
  { id: 'system', label: 'Tự động', icon: ComputerDesktopIcon },
]

function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') {
      return 'system'
    }

    const savedTheme = window.localStorage.getItem('namhnz-theme-mode')
    return savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system'
      ? savedTheme
      : 'system'
  })

  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') {
      return 'light'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  const openExternal = (href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const applySystemTheme = (matches: boolean) => {
      setSystemTheme(matches ? 'dark' : 'light')
    }

    applySystemTheme(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      applySystemTheme(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  const resolvedTheme = themeMode === 'system' ? systemTheme : themeMode

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = resolvedTheme
    root.dataset.themeMode = themeMode
    window.localStorage.setItem('namhnz-theme-mode', themeMode)

    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', resolvedTheme === 'dark' ? '#0f172a' : '#4285f4')
    }
  }, [resolvedTheme, themeMode])

  return (
    <main className="theme-shell relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.22),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(251,191,36,0.18),_transparent_28%),radial-gradient(circle_at_center,_rgba(14,165,233,0.12),_transparent_36%)]" />

      <section className="px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
        <Surface className="theme-panel theme-hero-panel overflow-hidden border border-white/60 bg-white/70 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
          <section className="theme-hero-surface grid gap-10 rounded-[36px] bg-[radial-gradient(circle_at_top_left,_rgba(93,214,198,0.24),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(255,191,117,0.2),_transparent_26%),linear-gradient(135deg,_rgba(255,255,255,0.88),_rgba(255,255,255,0.58))] px-5 py-8 sm:px-8 xl:grid-cols-[0.9fr_1.1fr] xl:px-12 xl:py-10">
            <div className="min-w-0 space-y-8 self-center">
              <div className="flex flex-wrap items-center gap-3">
                <Chip className="rounded-full bg-teal-50 text-teal-700" variant="soft">
                  namhnz
                </Chip>
                <Chip className="rounded-full bg-white/85 text-slate-600" variant="soft">
                  Product landing page
                </Chip>
              </div>

              <div className="flex items-center gap-4">
                <div className="grid size-16 shrink-0 place-items-center rounded-[22px] bg-slate-900 text-white shadow-lg shadow-slate-900/20">
                  <Squares2X2Icon className="size-8" />
                </div>
              </div>

              <div className="space-y-5">
                <h1 className="theme-heading max-w-3xl text-balance font-['Manrope'] text-5xl font-extrabold leading-[0.92] tracking-[-0.06em] text-slate-900 sm:text-6xl lg:text-[6rem]">
                  namhnz
                </h1>
                <Text className="theme-body max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Bộ ứng dụng cá nhân được xây dựng để giải quyết những nhu cầu rất cụ thể, hàng ngày.
                </Text>
              </div>

              <div className="flex flex-wrap gap-3">
                <span title="Xem danh sách sản phẩm bên dưới">
                  <Button
                    className="rounded-full bg-slate-900 text-white"
                    onPress={() => {
                      scrollToSection('products')
                    }}
                  >
                    Xem sản phẩm
                  </Button>
                </span>
                <span title="Di chuyển đến phần liên hệ">
                  <Button
                    className="rounded-full"
                    variant="outline"
                    onPress={() => scrollToSection('contact')}
                  >
                    Liên hệ
                  </Button>
                </span>
              </div>
            </div>

            <div className="relative flex min-h-[340px] items-center justify-center sm:min-h-[420px] xl:min-h-[560px]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.92),_transparent_44%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),_transparent_36%)]" />
              <div className="pointer-events-none absolute inset-x-[8%] top-[10%] h-[72%] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.9),_rgba(255,255,255,0))] blur-3xl" />
              <img
                src="/room-image.png"
                alt="Hình ảnh minh hoạ giao diện room"
                className="relative z-10 h-auto w-full max-w-4xl object-contain drop-shadow-[0_38px_44px_rgba(15,23,42,0.18)]"
              />
            </div>
          </section>
        </Surface>
      </section>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-4 sm:px-6 lg:px-8 lg:pb-8">
        <section id="products" className="space-y-6">
          <div className="space-y-2">
            <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Spotlight
            </p>
            <h2 className="theme-heading font-['Manrope'] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Bộ sản phẩm đang được giới thiệu
            </h2>
            <Text className="theme-body max-w-2xl text-base leading-7 text-slate-600">
              Mỗi sản phẩm có một vai trò riêng, nhưng cùng chung một tinh thần: rõ ràng, thực dụng và dễ dùng.
            </Text>
          </div>

          <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {appLinks.map(
              ({
                title,
                teaser,
                description,
                href,
                label,
                icon: Icon,
                lightIconClassName,
                darkIconClassName,
                lightIconWrapClassName,
                darkIconWrapClassName,
                lightChipClassName,
                darkChipClassName,
                lightPanelClassName,
                darkPanelClassName,
                lightAccentClassName,
                darkAccentClassName,
                buttonClassName,
              }) => (
                <article
                  key={title}
                  className={`theme-product-card relative overflow-hidden rounded-[32px] border p-6 shadow-xl shadow-slate-900/7 ${
                    resolvedTheme === 'dark' ? darkPanelClassName : lightPanelClassName
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${
                      resolvedTheme === 'dark' ? darkAccentClassName : lightAccentClassName
                    }`}
                  />

                  <div className="relative flex h-full flex-col gap-6">
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`grid size-14 place-items-center rounded-[20px] shadow-sm ${
                          resolvedTheme === 'dark'
                            ? darkIconWrapClassName
                            : lightIconWrapClassName
                        }`}
                      >
                        <Icon
                          className={`size-7 ${
                            resolvedTheme === 'dark' ? darkIconClassName : lightIconClassName
                          }`}
                        />
                      </div>
                      <Chip
                        className={`rounded-full ${
                          resolvedTheme === 'dark' ? darkChipClassName : lightChipClassName
                        }`}
                        variant="soft"
                      >
                        {label}
                      </Chip>
                    </div>

                    <div className="space-y-3">
                      <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {teaser}
                      </p>
                      <h3 className="theme-heading font-['Manrope'] text-3xl font-bold leading-tight tracking-tight text-slate-900">
                        {title}
                      </h3>
                      <Text className="theme-body text-sm leading-7 text-slate-600">{description}</Text>
                    </div>

                    <div className="mt-auto">
                      <span title={`Mở ${title}`}>
                        <Button
                          className={`w-full rounded-full ${buttonClassName}`}
                          onPress={() => openExternal(href)}
                        >
                          <span className="inline-flex items-center gap-2">
                            Khám phá sản phẩm
                            <ArrowTopRightOnSquareIcon className="size-4" />
                          </span>
                        </Button>
                      </span>
                    </div>
                  </div>
                </article>
              ),
            )}
          </section>
        </section>

        <section
          id="donate"
          className={`rounded-[32px] border px-6 py-8 shadow-xl shadow-slate-900/8 backdrop-blur-xl sm:px-8 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10 ${
            resolvedTheme === 'dark'
              ? 'border-slate-700/60 bg-[linear-gradient(135deg,rgba(15,23,42,0.9),rgba(6,78,59,0.28),rgba(12,74,110,0.22))]'
              : 'border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(240,253,250,0.92),rgba(239,246,255,0.88))]'
          }`}
        >
          <div className="space-y-4">
            <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Mời Cà Phê
            </p>
            <h2 className="theme-heading font-['Manrope'] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Nếu bạn thấy sản phẩm hữu ích, mời mình 1 ly cafe nhé.
            </h2>
            <Text className="theme-body max-w-2xl text-base leading-7 text-slate-600">
              Sự ủng hộ của bạn là nguồn động lực để mình tiếp tục tạo ra những sản phẩm chất lượng hơn mỗi ngày.
            </Text>
          </div>

          <div className="mt-6 flex justify-center lg:mt-0 lg:justify-end">
            <div className="rounded-[28px] border border-slate-200/75 bg-white p-3 shadow-lg shadow-slate-900/10">
              <img
                src="/donate_qr_code.png"
                alt="QR chuyển khoản mời cafe cho namhnz"
                className="h-auto w-full max-w-[320px] rounded-[20px] object-cover"
              />
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="theme-contact-cta rounded-[32px] border border-white/70 bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(30,41,59,0.94))] px-6 py-8 text-white shadow-2xl shadow-slate-900/15 sm:px-8 lg:flex lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl space-y-3">
            <p className="theme-contact-kicker text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
              Liên hệ
            </p>
            <h2 className="theme-contact-heading font-['Manrope'] text-3xl font-bold tracking-tight sm:text-4xl">
              Muốn trao đổi về sản phẩm hoặc hợp tác cùng namhnz?
            </h2>
            <Text className="theme-contact-body text-base leading-7 text-white/70">
              Có thể bắt đầu nhanh qua Gmail hoặc Telegram.
            </Text>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0 lg:justify-end">
            {contacts.map(({ label, value, href, icon: Icon }) => (
              <span key={label} title={`Liên hệ qua ${label}`}>
                <Button
                  className="rounded-full bg-white text-slate-900"
                  onPress={() => openExternal(href)}
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon className="size-4" />
                    {value}
                  </span>
                </Button>
              </span>
            ))}
          </div>
        </section>

        <footer className="theme-footer-line border-t border-slate-200/80 px-1 pt-8 pb-4">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="space-y-2">
              <p className="theme-body text-sm text-slate-500">Landing page giới thiệu sản phẩm của namhnz</p>
              <p className="theme-body text-sm text-slate-500">laychu.com</p>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 text-sm text-slate-500">
              <div className="theme-switcher inline-flex flex-wrap items-center gap-1 rounded-full px-1.5 py-1.5">
                {themeOptions.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    title={`Chuyển sang chế độ ${label.toLowerCase()}`}
                    className={`theme-switcher__option ${themeMode === id ? 'theme-switcher__option--active' : ''}`}
                    onClick={() => setThemeMode(id)}
                  >
                    <Icon className="size-3.5" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>

              <div className="grid size-10 place-items-center rounded-full bg-slate-900 text-white">
                <Squares2X2Icon className="size-5" />
              </div>
              <div>
                <p className="theme-heading font-semibold text-slate-900">Made with love by namhnz</p>
                <p className="theme-body">namhnz apps · laychu.com</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default App
