import { useEffect, useRef, useState, type ComponentType, type SVGProps } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Chip, Surface, Text } from '@heroui/react'
import {
  AcademicCapIcon,
  ArrowTopRightOnSquareIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DocumentMagnifyingGlassIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  FolderOpenIcon,
  GlobeAltIcon,
  LanguageIcon,
  MoonIcon,
  PaperAirplaneIcon,
  PhotoIcon,
  ShoppingBagIcon,
  SunIcon,
} from '@heroicons/react/24/outline'
import { Squares2X2Icon } from '@heroicons/react/24/solid'
import { disableAnalytics, enableAnalytics, trackProductClick } from './analytics'
import i18n, { LANGUAGE_STORAGE_KEY, type SupportedLanguage } from './i18n'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>
type ThemeMode = 'light' | 'dark' | 'system'
type Platform = 'desktop' | 'mobile' | 'web'
type AnalyticsConsent = 'granted' | 'denied' | null

type Product = {
  id: string
  title: string
  translationKey: string
  href: string
  platforms: Platform[]
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

const ANALYTICS_CONSENT_STORAGE_KEY = 'namhnz-analytics-consent'

const products: Product[] = [
  {
    id: 'instant-translate',
    title: 'Instant Translate',
    translationKey: 'instantTranslate',
    href: 'https://translate.laychu.com/',
    platforms: ['desktop'],
    icon: LanguageIcon,
    lightIconClassName: 'text-teal-700', darkIconClassName: 'text-teal-200',
    lightIconWrapClassName: 'bg-teal-100', darkIconWrapClassName: 'bg-teal-500/18',
    lightChipClassName: 'bg-teal-50 text-teal-700', darkChipClassName: 'bg-teal-500/14 text-teal-200',
    lightPanelClassName: 'bg-[linear-gradient(135deg,rgba(240,253,250,0.95),rgba(255,255,255,0.92))] border-teal-100/80',
    darkPanelClassName: 'bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(6,78,59,0.38))] border-teal-500/18',
    lightAccentClassName: 'from-teal-300/70 via-emerald-200/40 to-transparent', darkAccentClassName: 'from-teal-400/20 via-emerald-300/12 to-transparent', buttonClassName: 'bg-teal-700 text-white',
  },
  {
    id: 'document-wallet', title: 'Ví Giấy Tờ', translationKey: 'documentWallet', href: 'https://vigiayto.laychu.com/', platforms: ['mobile'], icon: DocumentMagnifyingGlassIcon,
    lightIconClassName: 'text-amber-700', darkIconClassName: 'text-amber-200', lightIconWrapClassName: 'bg-amber-100', darkIconWrapClassName: 'bg-amber-500/18', lightChipClassName: 'bg-amber-50 text-amber-700', darkChipClassName: 'bg-amber-500/14 text-amber-200',
    lightPanelClassName: 'bg-[linear-gradient(135deg,rgba(255,251,235,0.96),rgba(255,255,255,0.92))] border-amber-100/80', darkPanelClassName: 'bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(120,53,15,0.36))] border-amber-500/18', lightAccentClassName: 'from-amber-300/70 via-orange-200/40 to-transparent', darkAccentClassName: 'from-amber-400/18 via-orange-300/12 to-transparent', buttonClassName: 'bg-amber-600 text-white',
  },
  {
    id: 'semit', title: 'SEMIT', translationKey: 'semit', href: 'http://semit.laychu.com/', platforms: ['mobile'], icon: FolderOpenIcon,
    lightIconClassName: 'text-sky-700', darkIconClassName: 'text-sky-200', lightIconWrapClassName: 'bg-sky-100', darkIconWrapClassName: 'bg-sky-500/18', lightChipClassName: 'bg-sky-50 text-sky-700', darkChipClassName: 'bg-sky-500/14 text-sky-200',
    lightPanelClassName: 'bg-[linear-gradient(135deg,rgba(240,249,255,0.96),rgba(255,255,255,0.92))] border-sky-100/80', darkPanelClassName: 'bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(12,74,110,0.34))] border-sky-500/18', lightAccentClassName: 'from-sky-300/70 via-cyan-200/40 to-transparent', darkAccentClassName: 'from-sky-400/18 via-cyan-300/12 to-transparent', buttonClassName: 'bg-sky-700 text-white',
  },
  {
    id: 'pdf-converter', title: 'Pdf Converter', translationKey: 'pdfConverter', href: 'https://pdf.laychu.com', platforms: ['desktop'], icon: DocumentTextIcon,
    lightIconClassName: 'text-rose-700', darkIconClassName: 'text-rose-200', lightIconWrapClassName: 'bg-rose-100', darkIconWrapClassName: 'bg-rose-500/18', lightChipClassName: 'bg-rose-50 text-rose-700', darkChipClassName: 'bg-rose-500/14 text-rose-200',
    lightPanelClassName: 'bg-[linear-gradient(135deg,rgba(255,241,242,0.96),rgba(255,255,255,0.92))] border-rose-100/80', darkPanelClassName: 'bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(127,29,29,0.34))] border-rose-500/18', lightAccentClassName: 'from-rose-300/70 via-orange-200/35 to-transparent', darkAccentClassName: 'from-rose-400/18 via-orange-300/12 to-transparent', buttonClassName: 'bg-rose-700 text-white',
  },
  {
    id: 'projects-runner', title: 'Projects Runner', translationKey: 'projectsRunner', href: 'https://projects-runner.laychu.com/', platforms: ['desktop'], icon: ComputerDesktopIcon,
    lightIconClassName: 'text-emerald-700', darkIconClassName: 'text-emerald-200', lightIconWrapClassName: 'bg-emerald-100', darkIconWrapClassName: 'bg-emerald-500/18', lightChipClassName: 'bg-emerald-50 text-emerald-700', darkChipClassName: 'bg-emerald-500/14 text-emerald-200',
    lightPanelClassName: 'bg-[linear-gradient(135deg,rgba(236,253,245,0.96),rgba(255,255,255,0.92))] border-emerald-100/80', darkPanelClassName: 'bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(6,95,70,0.34))] border-emerald-500/18', lightAccentClassName: 'from-emerald-300/70 via-lime-200/35 to-transparent', darkAccentClassName: 'from-emerald-400/18 via-lime-300/12 to-transparent', buttonClassName: 'bg-emerald-700 text-white',
  },
  {
    id: 'shopping-list', title: 'List mua sắm', translationKey: 'shoppingList', href: 'https://listmuasam.store/', platforms: ['web'], icon: ShoppingBagIcon,
    lightIconClassName: 'text-indigo-700', darkIconClassName: 'text-indigo-200', lightIconWrapClassName: 'bg-indigo-100', darkIconWrapClassName: 'bg-indigo-500/18', lightChipClassName: 'bg-indigo-50 text-indigo-700', darkChipClassName: 'bg-indigo-500/14 text-indigo-200',
    lightPanelClassName: 'bg-[linear-gradient(135deg,rgba(238,242,255,0.96),rgba(255,255,255,0.92))] border-indigo-100/80', darkPanelClassName: 'bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(49,46,129,0.34))] border-indigo-500/18', lightAccentClassName: 'from-indigo-300/70 via-violet-200/35 to-transparent', darkAccentClassName: 'from-indigo-400/18 via-violet-300/12 to-transparent', buttonClassName: 'bg-indigo-700 text-white',
  },
  {
    id: 'mock-exam', title: 'Thi Thử App', translationKey: 'mockExam', href: 'https://thithu.laychu.com/', platforms: ['desktop', 'mobile'], icon: AcademicCapIcon,
    lightIconClassName: 'text-violet-700', darkIconClassName: 'text-violet-200', lightIconWrapClassName: 'bg-violet-100', darkIconWrapClassName: 'bg-violet-500/18', lightChipClassName: 'bg-violet-50 text-violet-700', darkChipClassName: 'bg-violet-500/14 text-violet-200',
    lightPanelClassName: 'bg-[linear-gradient(135deg,rgba(245,243,255,0.96),rgba(255,255,255,0.92))] border-violet-100/80', darkPanelClassName: 'bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(91,33,182,0.26))] border-violet-500/18', lightAccentClassName: 'from-violet-300/70 via-fuchsia-200/35 to-transparent', darkAccentClassName: 'from-violet-400/18 via-fuchsia-300/12 to-transparent', buttonClassName: 'bg-violet-700 text-white',
  },
  {
    id: 'image-cropper', title: 'Image Cropper', translationKey: 'imageCropper', href: 'https://image-cropper.laychu.com/', platforms: ['web'], icon: PhotoIcon,
    lightIconClassName: 'text-cyan-700', darkIconClassName: 'text-cyan-200', lightIconWrapClassName: 'bg-cyan-100', darkIconWrapClassName: 'bg-cyan-500/18', lightChipClassName: 'bg-cyan-50 text-cyan-700', darkChipClassName: 'bg-cyan-500/14 text-cyan-200',
    lightPanelClassName: 'bg-[linear-gradient(135deg,rgba(236,254,255,0.96),rgba(255,255,255,0.92))] border-cyan-100/80', darkPanelClassName: 'bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(8,145,178,0.28))] border-cyan-500/18', lightAccentClassName: 'from-cyan-300/70 via-sky-200/35 to-transparent', darkAccentClassName: 'from-cyan-400/18 via-sky-300/12 to-transparent', buttonClassName: 'bg-cyan-700 text-white',
  },
]

const platformSections: Array<{ id: Platform; icon: IconComponent }> = [
  { id: 'desktop', icon: ComputerDesktopIcon },
  { id: 'mobile', icon: DevicePhoneMobileIcon },
  { id: 'web', icon: GlobeAltIcon },
]

const contacts: Contact[] = [
  { label: 'Gmail', value: 'namqhong@gmail.com', href: 'mailto:namqhong@gmail.com', icon: EnvelopeIcon },
  { label: 'Telegram', value: '@namhnz', href: 'https://t.me/namhnz', icon: PaperAirplaneIcon },
]

const languageOptions: Array<{ id: SupportedLanguage; label: string }> = [
  { id: 'en', label: 'English' }, { id: 'vi', label: 'Tiếng Việt' }, { id: 'zh-CN', label: '简体中文' },
  { id: 'ja', label: '日本語' }, { id: 'ko', label: '한국어' }, { id: 'es', label: 'Español' }, { id: 'fr', label: 'Français' },
]

function getStoredAnalyticsConsent(): AnalyticsConsent {
  if (typeof window === 'undefined') return null
  const value = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY)
  return value === 'granted' || value === 'denied' ? value : null
}

function App() {
  const { t } = useTranslation()
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return 'system'
    const savedTheme = window.localStorage.getItem('namhnz-theme-mode')
    return savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system' ? savedTheme : 'system'
  })
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  )
  const [analyticsConsent, setAnalyticsConsent] = useState<AnalyticsConsent>(getStoredAnalyticsConsent)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const languageMenuRef = useRef<HTMLDivElement>(null)

  const resolvedTheme = themeMode === 'system' ? systemTheme : themeMode
  const currentLanguage = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage
  const currentLanguageLabel = languageOptions.find(({ id }) => id === currentLanguage)?.label || 'English'

  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const chooseAnalytics = (consent: Exclude<AnalyticsConsent, null>) => {
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, consent)
    setAnalyticsConsent(consent)
  }

  const reopenAnalyticsSettings = () => {
    window.localStorage.removeItem(ANALYTICS_CONSENT_STORAGE_KEY)
    setAnalyticsConsent(null)
  }

  const openProduct = (product: Product, platform: Platform) => {
    trackProductClick({
      product_name: product.title,
      product_id: product.id,
      platform_group: platform,
      language: currentLanguage,
      destination_domain: new URL(product.href).hostname,
    })
    window.open(product.href, '_blank', 'noopener,noreferrer')
  }

  const openExternal = (href: string) => window.open(href, '_blank', 'noopener,noreferrer')

  const changeLanguage = (language: SupportedLanguage) => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    void i18n.changeLanguage(language)
    setLanguageMenuOpen(false)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event: MediaQueryListEvent) => setSystemTheme(event.matches ? 'dark' : 'light')
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = resolvedTheme
    root.dataset.themeMode = themeMode
    window.localStorage.setItem('namhnz-theme-mode', themeMode)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', resolvedTheme === 'dark' ? '#0f172a' : '#4285f4')
  }, [resolvedTheme, themeMode])

  useEffect(() => {
    document.documentElement.lang = currentLanguage
    document.title = t('metadata.title')
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('metadata.description'))
  }, [currentLanguage, t])

  useEffect(() => {
    if (analyticsConsent === 'granted') enableAnalytics()
    else disableAnalytics()
  }, [analyticsConsent])

  useEffect(() => {
    if (!languageMenuOpen) return
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!languageMenuRef.current?.contains(event.target as Node)) setLanguageMenuOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLanguageMenuOpen(false)
    }
    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [languageMenuOpen])

  return (
    <main className="theme-shell relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.22),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(251,191,36,0.18),_transparent_28%),radial-gradient(circle_at_center,_rgba(14,165,233,0.12),_transparent_36%)]" />

      <section className="px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
        <Surface className="theme-panel theme-hero-panel overflow-hidden border border-white/60 bg-white/70 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
          <section className="theme-hero-surface grid gap-10 rounded-[36px] bg-[radial-gradient(circle_at_top_left,_rgba(93,214,198,0.24),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(255,191,117,0.2),_transparent_26%),linear-gradient(135deg,_rgba(255,255,255,0.88),_rgba(255,255,255,0.58))] px-5 py-8 sm:px-8 xl:grid-cols-[0.9fr_1.1fr] xl:px-12 xl:py-10">
            <div className="min-w-0 space-y-8 self-center">
              <div className="flex flex-wrap items-center gap-3">
                <Chip className="rounded-full bg-teal-50 text-teal-700" variant="soft">namhnz</Chip>
                <Chip className="rounded-full bg-white/85 text-slate-600" variant="soft">{t('hero.productLanding')}</Chip>
              </div>
              <div className="flex items-center gap-4"><div className="grid size-16 shrink-0 place-items-center rounded-[22px] bg-slate-900 text-white shadow-lg shadow-slate-900/20"><Squares2X2Icon className="size-8" /></div></div>
              <div className="space-y-5">
                <h1 className="theme-heading max-w-3xl text-balance font-['Manrope'] text-5xl font-extrabold leading-[0.92] tracking-[-0.06em] text-slate-900 sm:text-6xl lg:text-[6rem]">namhnz</h1>
                <Text className="theme-body max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{t('hero.description')}</Text>
              </div>
              <div className="flex flex-wrap gap-3">
                <span title={t('hero.productsHint')}><Button className="rounded-full bg-slate-900 text-white" onPress={() => scrollToSection('products')}>{t('hero.products')}</Button></span>
                <span title={t('hero.contactHint')}><Button className="rounded-full" variant="outline" onPress={() => scrollToSection('contact')}>{t('hero.contact')}</Button></span>
              </div>
            </div>
            <div className="relative flex min-h-[340px] items-center justify-center sm:min-h-[420px] xl:min-h-[560px]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.92),_transparent_44%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),_transparent_36%)]" />
              <div className="pointer-events-none absolute inset-x-[8%] top-[10%] h-[72%] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.9),_rgba(255,255,255,0))] blur-3xl" />
              <img src="/room-image.png" alt="" className="relative z-10 h-auto w-full max-w-4xl object-contain drop-shadow-[0_38px_44px_rgba(15,23,42,0.18)]" />
            </div>
          </section>
        </Surface>
      </section>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-4 sm:px-6 lg:px-8 lg:pb-8">
        <section id="products" className="space-y-10">
          <div className="space-y-2">
            <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{t('products.kicker')}</p>
            <h2 className="theme-heading font-['Manrope'] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t('products.title')}</h2>
            <Text className="theme-body max-w-2xl text-base leading-7 text-slate-600">{t('products.description')}</Text>
          </div>

          {platformSections.map(({ id: platform, icon: PlatformIcon }) => (
            <section key={platform} aria-labelledby={`${platform}-products`} className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/15"><PlatformIcon className="size-6" /></div>
                <div className="space-y-1">
                  <h3 id={`${platform}-products`} className="theme-heading font-['Manrope'] text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{t(`platforms.${platform}.title`)}</h3>
                  <Text className="theme-body text-sm leading-6 text-slate-600">{t(`platforms.${platform}.description`)}</Text>
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {products.filter((product) => product.platforms.includes(platform)).map((product) => {
                  const Icon = product.icon
                  const isCrossPlatform = product.platforms.length > 1
                  return (
                    <article key={`${platform}-${product.id}`} className={`theme-product-card relative overflow-hidden rounded-[32px] border p-6 shadow-xl shadow-slate-900/7 ${resolvedTheme === 'dark' ? product.darkPanelClassName : product.lightPanelClassName}`}>
                      <div className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${resolvedTheme === 'dark' ? product.darkAccentClassName : product.lightAccentClassName}`} />
                      <div className="relative flex h-full flex-col gap-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className={`grid size-14 place-items-center rounded-[20px] shadow-sm ${resolvedTheme === 'dark' ? product.darkIconWrapClassName : product.lightIconWrapClassName}`}><Icon className={`size-7 ${resolvedTheme === 'dark' ? product.darkIconClassName : product.lightIconClassName}`} /></div>
                          <div className="flex flex-wrap justify-end gap-2">
                            {isCrossPlatform && <Chip className="rounded-full bg-slate-900 text-white" variant="soft">{t('products.crossPlatform')}</Chip>}
                            <Chip className={`rounded-full ${resolvedTheme === 'dark' ? product.darkChipClassName : product.lightChipClassName}`} variant="soft">{t(`productsData.${product.translationKey}.label`)}</Chip>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{t(`productsData.${product.translationKey}.teaser`)}</p>
                          <h4 className="theme-heading font-['Manrope'] text-3xl font-bold leading-tight tracking-tight text-slate-900">{product.title}</h4>
                          <Text className="theme-body text-sm leading-7 text-slate-600">{t(`productsData.${product.translationKey}.description`)}</Text>
                        </div>
                        <div className="mt-auto"><span title={t('products.open', { title: product.title })}><Button className={`w-full rounded-full ${product.buttonClassName}`} onPress={() => openProduct(product, platform)}><span className="inline-flex items-center gap-2">{t('products.explore')}<ArrowTopRightOnSquareIcon className="size-4" /></span></Button></span></div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </section>
          ))}
        </section>

        <section id="donate" className={`rounded-[32px] border px-6 py-8 shadow-xl shadow-slate-900/8 backdrop-blur-xl sm:px-8 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10 ${resolvedTheme === 'dark' ? 'border-slate-700/60 bg-[linear-gradient(135deg,rgba(15,23,42,0.9),rgba(6,78,59,0.28),rgba(12,74,110,0.22))]' : 'border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(240,253,250,0.92),rgba(239,246,255,0.88))]'}`}>
          <div className="space-y-4"><p className="theme-kicker text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{t('donate.kicker')}</p><h2 className="theme-heading font-['Manrope'] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t('donate.title')}</h2><Text className="theme-body max-w-2xl text-base leading-7 text-slate-600">{t('donate.description')}</Text></div>
          <div className="mt-6 flex justify-center lg:mt-0 lg:justify-end"><div className="rounded-[28px] border border-slate-200/75 bg-white p-3 shadow-lg shadow-slate-900/10"><img src="/donate_qr_code.png" alt="QR code" className="h-auto w-full max-w-[320px] rounded-[20px] object-cover" /></div></div>
        </section>

        <section id="contact" className="theme-contact-cta rounded-[32px] border border-white/70 bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(30,41,59,0.94))] px-6 py-8 text-white shadow-2xl shadow-slate-900/15 sm:px-8 lg:flex lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3"><p className="theme-contact-kicker text-sm font-semibold uppercase tracking-[0.24em] text-white/60">{t('contact.kicker')}</p><h2 className="theme-contact-heading font-['Manrope'] text-3xl font-bold tracking-tight sm:text-4xl">{t('contact.title')}</h2><Text className="theme-contact-body text-base leading-7 text-white/70">{t('contact.description')}</Text></div>
          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0 lg:justify-end">{contacts.map(({ label, value, href, icon: Icon }) => <span key={label} title={t('contact.via', { channel: label })}><Button className="rounded-full bg-white text-slate-900" onPress={() => openExternal(href)}><span className="inline-flex items-center gap-2"><Icon className="size-4" />{value}</span></Button></span>)}</div>
        </section>

        <footer className="theme-footer-line border-t border-slate-200/80 px-1 pt-8 pb-4">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="space-y-2"><p className="theme-body text-sm text-slate-500">{t('footer.description')}</p><p className="theme-body text-sm text-slate-500">laychu.com</p></div>
            <div className="flex flex-wrap items-center justify-end gap-3 text-sm text-slate-500">
              <div ref={languageMenuRef} className="relative">
                <button type="button" title={t('language.change')} aria-label={t('language.change')} aria-haspopup="listbox" aria-expanded={languageMenuOpen} className="theme-switcher inline-flex items-center gap-1 rounded-full px-1.5 py-1.5" onClick={() => setLanguageMenuOpen((open) => !open)}>
                  <LanguageIcon className="size-3.5" /><span className="theme-switcher__option">{currentLanguageLabel}</span>
                </button>
                {languageMenuOpen && <div role="listbox" aria-label={t('language.choose')} className="theme-switcher absolute right-0 bottom-[calc(100%+0.5rem)] z-20 grid min-w-44 gap-1 rounded-2xl p-1.5 shadow-xl shadow-slate-900/20">{languageOptions.map(({ id, label }) => <button key={id} type="button" role="option" aria-selected={id === currentLanguage} className={`theme-switcher__option w-full justify-start ${id === currentLanguage ? 'theme-switcher__option--active' : ''}`} onClick={() => changeLanguage(id)}>{label}</button>)}</div>}
              </div>
              <div className="theme-switcher inline-flex flex-wrap items-center gap-1 rounded-full px-1.5 py-1.5">{(['light', 'dark', 'system'] as ThemeMode[]).map((id) => { const Icon = id === 'light' ? SunIcon : id === 'dark' ? MoonIcon : ComputerDesktopIcon; const label = t(`theme.${id}`); return <button key={id} type="button" title={t('theme.switchTo', { theme: label.toLowerCase() })} className={`theme-switcher__option ${themeMode === id ? 'theme-switcher__option--active' : ''}`} onClick={() => setThemeMode(id)}><Icon className="size-3.5" /><span>{label}</span></button> })}</div>
              <button type="button" className="theme-switcher__option" onClick={reopenAnalyticsSettings}>{t('analytics.settings')}</button>
              <div className="grid size-10 place-items-center rounded-full bg-slate-900 text-white"><Squares2X2Icon className="size-5" /></div>
              <div><p className="theme-heading font-semibold text-slate-900">{t('footer.madeWithLove')}</p><p className="theme-body">{t('footer.apps')}</p></div>
            </div>
          </div>
        </footer>
      </div>

      {analyticsConsent === null && <aside aria-label={t('analytics.title')} className="fixed inset-x-4 bottom-4 z-30 mx-auto max-w-xl rounded-[28px] border border-white/50 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/35 backdrop-blur-xl sm:inset-x-6 sm:p-6"><h2 className="font-['Manrope'] text-xl font-bold">{t('analytics.title')}</h2><p className="mt-2 text-sm leading-6 text-white/75">{t('analytics.description')}</p><div className="mt-5 flex flex-wrap gap-3"><Button className="rounded-full bg-white text-slate-900" onPress={() => chooseAnalytics('granted')}>{t('analytics.accept')}</Button><Button className="rounded-full border-white/40 text-white" variant="outline" onPress={() => chooseAnalytics('denied')}>{t('analytics.decline')}</Button></div></aside>}
    </main>
  )
}

export default App
