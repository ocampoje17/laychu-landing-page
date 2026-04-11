import type { ComponentType, SVGProps } from 'react'
import { Button, Chip, Surface, Text } from '@heroui/react'
import {
  ArrowTopRightOnSquareIcon,
  DocumentMagnifyingGlassIcon,
  EnvelopeIcon,
  FolderOpenIcon,
  LanguageIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline'
import { Squares2X2Icon } from '@heroicons/react/24/solid'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

type AppLink = {
  title: string
  teaser: string
  description: string
  href: string
  label: string
  icon: IconComponent
  iconClassName: string
  iconWrapClassName: string
  chipClassName: string
  panelClassName: string
  accentClassName: string
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
    iconClassName: 'text-teal-700',
    iconWrapClassName: 'bg-teal-100',
    chipClassName: 'bg-teal-50 text-teal-700',
    panelClassName:
      'bg-[linear-gradient(135deg,rgba(240,253,250,0.95),rgba(255,255,255,0.92))] border-teal-100/80',
    accentClassName: 'from-teal-300/70 via-emerald-200/40 to-transparent',
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
    iconClassName: 'text-amber-700',
    iconWrapClassName: 'bg-amber-100',
    chipClassName: 'bg-amber-50 text-amber-700',
    panelClassName:
      'bg-[linear-gradient(135deg,rgba(255,251,235,0.96),rgba(255,255,255,0.92))] border-amber-100/80',
    accentClassName: 'from-amber-300/70 via-orange-200/40 to-transparent',
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
    iconClassName: 'text-sky-700',
    iconWrapClassName: 'bg-sky-100',
    chipClassName: 'bg-sky-50 text-sky-700',
    panelClassName:
      'bg-[linear-gradient(135deg,rgba(240,249,255,0.96),rgba(255,255,255,0.92))] border-sky-100/80',
    accentClassName: 'from-sky-300/70 via-cyan-200/40 to-transparent',
    buttonClassName: 'bg-sky-700 text-white',
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

function App() {
  const openExternal = (href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.22),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(251,191,36,0.18),_transparent_28%),radial-gradient(circle_at_center,_rgba(14,165,233,0.12),_transparent_36%)]" />

      <section className="px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
        <Surface className="overflow-hidden border border-white/60 bg-white/70 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
          <section className="grid gap-10 rounded-[36px] bg-[radial-gradient(circle_at_top_left,_rgba(93,214,198,0.24),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(255,191,117,0.2),_transparent_26%),linear-gradient(135deg,_rgba(255,255,255,0.88),_rgba(255,255,255,0.58))] px-5 py-8 sm:px-8 xl:grid-cols-[0.9fr_1.1fr] xl:px-12 xl:py-10">
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
                <h1 className="max-w-3xl text-balance font-['Manrope'] text-5xl font-extrabold leading-[0.92] tracking-[-0.06em] text-slate-900 sm:text-6xl lg:text-[6rem]">
                  namhnz
                </h1>
                <Text className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Bộ ứng dụng cá nhân được xây dựng để giải quyết những nhu cầu rất cụ thể: dịch tức thì trên Windows, lưu trữ giấy tờ an toàn offline và ghi nhớ các cột mốc quan trọng ngay trên điện thoại.
                </Text>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  className="rounded-full bg-slate-900 text-white"
                  onPress={() => {
                    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Xem sản phẩm
                </Button>
                <Button
                  className="rounded-full"
                  variant="outline"
                  onPress={() => openExternal('mailto:namqhong@gmail.com')}
                >
                  Liên hệ
                </Button>
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Spotlight
            </p>
            <h2 className="font-['Manrope'] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Bộ sản phẩm đang được giới thiệu
            </h2>
            <Text className="max-w-2xl text-base leading-7 text-slate-600">
              Mỗi sản phẩm có một vai trò riêng, nhưng cùng chung một tinh thần: rõ ràng, thực dụng và dễ dùng.
            </Text>
          </div>

          <section className="grid gap-5 lg:grid-cols-3">
            {appLinks.map(
              ({
                title,
                teaser,
                description,
                href,
                label,
                icon: Icon,
                iconClassName,
                iconWrapClassName,
                chipClassName,
                panelClassName,
                accentClassName,
                buttonClassName,
              }) => (
                <article
                  key={title}
                  className={`relative overflow-hidden rounded-[32px] border p-6 shadow-xl shadow-slate-900/7 ${panelClassName}`}
                >
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${accentClassName}`}
                  />

                  <div className="relative flex h-full flex-col gap-6">
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`grid size-14 place-items-center rounded-[20px] shadow-sm ${iconWrapClassName}`}
                      >
                        <Icon className={`size-7 ${iconClassName}`} />
                      </div>
                      <Chip className={`rounded-full ${chipClassName}`} variant="soft">
                        {label}
                      </Chip>
                    </div>

                    <div className="space-y-3">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {teaser}
                      </p>
                      <h3 className="font-['Manrope'] text-3xl font-bold leading-tight tracking-tight text-slate-900">
                        {title}
                      </h3>
                      <Text className="text-sm leading-7 text-slate-600">{description}</Text>
                    </div>

                    <div className="mt-auto">
                      <Button
                        className={`w-full rounded-full ${buttonClassName}`}
                        onPress={() => openExternal(href)}
                      >
                        <span className="inline-flex items-center gap-2">
                          Khám phá sản phẩm
                          <ArrowTopRightOnSquareIcon className="size-4" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </article>
              ),
            )}
          </section>
        </section>

        <section className="rounded-[32px] border border-white/70 bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(30,41,59,0.94))] px-6 py-8 text-white shadow-2xl shadow-slate-900/15 sm:px-8 lg:flex lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
              Liên hệ
            </p>
            <h2 className="font-['Manrope'] text-3xl font-bold tracking-tight sm:text-4xl">
              Muốn trao đổi về sản phẩm hoặc hợp tác cùng namhnz?
            </h2>
            <Text className="text-base leading-7 text-white/70">
              Có thể bắt đầu nhanh qua Gmail hoặc Telegram.
            </Text>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0 lg:justify-end">
            {contacts.map(({ label, value, href, icon: Icon }) => (
              <Button
                key={label}
                className="rounded-full bg-white text-slate-900"
                onPress={() => openExternal(href)}
              >
                <span className="inline-flex items-center gap-2">
                  <Icon className="size-4" />
                  {value}
                </span>
              </Button>
            ))}
          </div>
        </section>

        <footer className="border-t border-slate-200/80 px-1 pt-8 pb-4">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="space-y-2">
              <p className="text-sm text-slate-500">Landing page giới thiệu sản phẩm của namhnz</p>
              <p className="text-sm text-slate-500">laychu.com</p>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-500">
              <div className="grid size-10 place-items-center rounded-full bg-slate-900 text-white">
                <Squares2X2Icon className="size-5" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Made with love by namhnz</p>
                <p>namhnz apps · laychu.com</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default App
