import type { ComponentType, SVGProps } from 'react'
import { Button, Card, Chip, Surface, Text } from '@heroui/react'
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
    title: 'Laychu Translate',
    teaser: 'Dịch thuật gọn, nhanh và rõ ràng.',
    description:
      'Dịch nhanh, gọn và dễ dùng cho những nhu cầu xử lý ngôn ngữ hằng ngày.',
    href: 'https://translate.laychu.com/',
    label: 'Dịch thuật',
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
    teaser: 'Quản lý hồ sơ số theo cách nhẹ nhàng hơn.',
    description:
      'Không gian tập trung để quản lý giấy tờ số, truy cập hồ sơ và thao tác thuận tiện hơn.',
    href: 'https://vigiayto.laychu.com/',
    label: 'Hồ sơ số',
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
    teaser: 'Điểm vào tập trung cho nền tảng làm việc nội bộ.',
    description:
      'Điểm truy cập riêng cho hệ thống SEMIT, phục vụ mở nhanh và làm việc trực tiếp trên nền tảng.',
    href: 'http://semit.laychu.com/',
    label: 'Nền tảng SEMIT',
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
    <main className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.22),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(251,191,36,0.18),_transparent_28%),radial-gradient(circle_at_center,_rgba(14,165,233,0.12),_transparent_36%)]" />

      <Surface className="overflow-hidden border border-white/60 bg-white/75 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
        <section className="grid gap-8 rounded-[32px] bg-[radial-gradient(circle_at_top_left,_rgba(93,214,198,0.24),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(255,191,117,0.2),_transparent_26%),linear-gradient(135deg,_rgba(255,255,255,0.88),_rgba(255,255,255,0.6))] p-5 sm:p-8 xl:grid-cols-[1.02fr_0.98fr] xl:p-10">
          <div className="min-w-0 space-y-8 self-center">
            <div className="flex flex-wrap items-center gap-3">
              <Chip className="rounded-full bg-teal-50 text-teal-700" variant="soft">
                namhnz apps
              </Chip>
              <Chip className="rounded-full bg-white/85 text-slate-600" variant="soft">
                03 sản phẩm đang hoạt động
              </Chip>
            </div>

            <div className="flex items-center gap-4">
              <div className="grid size-16 shrink-0 place-items-center rounded-[22px] bg-slate-900 text-white shadow-lg shadow-slate-900/20">
                <Squares2X2Icon className="size-8" />
              </div>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-balance font-['Manrope'] text-5xl font-extrabold leading-[0.95] tracking-[-0.05em] text-slate-900 sm:text-6xl lg:text-[5.5rem]">
                Một landing page dành cho toàn bộ sản phẩm của namhnz
              </h1>
              <Text className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Từ dịch thuật, quản lý giấy tờ đến hệ thống làm việc nội bộ, mọi sản phẩm đều được đặt trong cùng một không gian gọn gàng và dễ nhớ.
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

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ['03', 'Sản phẩm'],
                ['01', 'Không gian giới thiệu'],
                ['namhnz', 'Tác giả'],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[28px] border border-white/70 bg-white/72 px-5 py-4 shadow-lg shadow-slate-900/5"
                >
                  <p className="font-['Manrope'] text-2xl font-bold tracking-tight text-slate-900">
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="overflow-hidden border border-white/70 bg-[linear-gradient(180deg,_rgba(255,255,255,0.9),_rgba(248,250,252,0.82))] shadow-xl shadow-slate-900/8">
            <Card.Content className="relative p-4 sm:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(45,212,191,0.14),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(251,191,36,0.14),_transparent_32%)]" />
              <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[30px] border border-slate-200 bg-[linear-gradient(135deg,_rgba(255,255,255,0.95),_rgba(241,245,249,0.92))] p-4 shadow-inner sm:min-h-[440px] sm:p-6">
                <img
                  src="/room-image.png"
                  alt="Hình ảnh minh hoạ giao diện room"
                  className="h-auto max-h-full w-full object-contain drop-shadow-[0_24px_30px_rgba(15,23,42,0.12)]"
                />
              </div>

              <div className="relative mt-5 grid gap-3">
                {appLinks.map(({ title, label, icon: Icon, iconClassName, iconWrapClassName }) => (
                  <div
                    key={title}
                    className="flex items-center justify-between gap-3 rounded-[24px] border border-slate-200 bg-white/85 px-4 py-3 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`grid size-10 place-items-center rounded-2xl ${iconWrapClassName}`}
                      >
                        <Icon className={`size-5 ${iconClassName}`} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700">{title}</p>
                        <p className="text-xs text-slate-500">{label}</p>
                      </div>
                    </div>
                    <ArrowTopRightOnSquareIcon className="size-4 text-slate-400" />
                  </div>
                ))}
              </div>
            </Card.Content>
          </Card>
        </section>
      </Surface>

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

                  <div className="mt-auto space-y-4">
                    <div className="rounded-[24px] border border-white/70 bg-white/70 px-4 py-4">
                      <p className="text-sm text-slate-500">Mở trực tiếp</p>
                      <p className="mt-1 break-all font-medium text-slate-800">
                        {href.replace(/^https?:\/\//, '')}
                      </p>
                    </div>

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
    </main>
  )
}

export default App
