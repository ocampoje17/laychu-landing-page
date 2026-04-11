import type { ComponentType, SVGProps } from 'react'
import { Button, Card, Chip, Link, Surface, Tabs, Text } from '@heroui/react'
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
  description: string
  href: string
  label: string
  icon: IconComponent
  iconClassName: string
  iconWrapClassName: string
  chipClassName: string
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
    description:
      'Dịch nhanh, gọn và dễ dùng cho những nhu cầu xử lý ngôn ngữ hằng ngày.',
    href: 'https://translate.laychu.com/',
    label: 'Dịch thuật',
    icon: LanguageIcon,
    iconClassName: 'text-teal-700',
    iconWrapClassName: 'bg-teal-100',
    chipClassName: 'bg-teal-50 text-teal-700',
  },
  {
    title: 'Ví Giấy Tờ',
    description:
      'Không gian tập trung để quản lý giấy tờ số, truy cập hồ sơ và thao tác thuận tiện hơn.',
    href: 'https://vigiayto.laychu.com/',
    label: 'Hồ sơ số',
    icon: DocumentMagnifyingGlassIcon,
    iconClassName: 'text-amber-700',
    iconWrapClassName: 'bg-amber-100',
    chipClassName: 'bg-amber-50 text-amber-700',
  },
  {
    title: 'SEMIT',
    description:
      'Điểm truy cập riêng cho hệ thống SEMIT, phục vụ mở nhanh và làm việc trực tiếp trên nền tảng.',
    href: 'http://semit.laychu.com/',
    label: 'Nền tảng SEMIT',
    icon: FolderOpenIcon,
    iconClassName: 'text-sky-700',
    iconWrapClassName: 'bg-sky-100',
    chipClassName: 'bg-sky-50 text-sky-700',
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
                Hệ sinh thái Laychu
              </Chip>
              <Chip className="rounded-full bg-white/85 text-slate-600" variant="soft">
                03 ứng dụng nổi bật
              </Chip>
            </div>

            <div className="flex items-center gap-4">
              <div className="grid size-16 shrink-0 place-items-center rounded-[22px] bg-slate-900 text-white shadow-lg shadow-slate-900/20">
                <Squares2X2Icon className="size-8" />
              </div>
              <Chip className="rounded-full bg-white/80 text-slate-700" variant="soft">
                namhnz
              </Chip>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-balance font-['Manrope'] text-5xl font-extrabold leading-[0.95] tracking-[-0.05em] text-slate-900 sm:text-6xl lg:text-[5.5rem]">
                Tất cả ứng dụng của namhnz
              </h1>
              <Text className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Truy cập nhanh đến các sản phẩm đang hoạt động trong hệ sinh thái
                Laychu từ một trang duy nhất.
              </Text>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                className="rounded-full bg-slate-900 text-white"
                onPress={() => openExternal(appLinks[0]!.href)}
              >
                Mở nhanh Translate
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
                ['03', 'Ứng dụng sẵn sàng'],
                ['01', 'Trang điều hướng chung'],
                ['24/7', 'Mở nhanh bất kỳ lúc nào'],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/70 bg-white/70 px-5 py-4 shadow-lg shadow-slate-900/5"
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

              <div className="relative mt-5 grid gap-3 sm:grid-cols-3">
                {appLinks.map(({ title, icon: Icon, iconClassName, iconWrapClassName }) => (
                  <div
                    key={title}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 shadow-sm"
                  >
                    <div className={`grid size-10 place-items-center rounded-2xl ${iconWrapClassName}`}>
                      <Icon className={`size-5 ${iconClassName}`} />
                    </div>
                    <p className="text-sm font-medium text-slate-700">{title}</p>
                  </div>
                ))}
              </div>
            </Card.Content>
          </Card>
        </section>
      </Surface>

      <section className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Điều hướng nhanh
            </p>
            <h2 className="font-['Manrope'] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Chọn ứng dụng bạn muốn mở
            </h2>
          </div>
          <Text className="max-w-xl text-sm leading-7 text-slate-500 sm:text-right">
            Mỗi ứng dụng có màu nhận diện riêng để bạn tìm nhanh hơn ngay từ lần nhìn đầu tiên.
          </Text>
        </div>

        <Tabs.Root className="w-full" defaultSelectedKey="apps">
          <Tabs.ListContainer className="overflow-x-auto pb-1">
          <Tabs.List
            aria-label="Nội dung chính"
            className="flex min-w-max gap-2 rounded-full border border-white/70 bg-white/70 p-2 shadow-lg shadow-slate-900/5"
          >
            <Tabs.Tab id="apps">Ứng dụng</Tabs.Tab>
          </Tabs.List>
          </Tabs.ListContainer>

          <Tabs.Panel id="apps" className="pt-6">
            <section className="grid gap-5 lg:grid-cols-3">
            {appLinks.map(
              ({
                title,
                description,
                href,
                label,
                icon: Icon,
                iconClassName,
                iconWrapClassName,
                chipClassName,
              }) => (
                <Card
                  key={title}
                  className="group border border-white/70 bg-[linear-gradient(180deg,_rgba(255,255,255,0.9),_rgba(248,250,252,0.82))] shadow-xl shadow-slate-900/8 transition-transform duration-300 hover:-translate-y-1"
                >
                  <Card.Header className="space-y-5">
                    <div className="flex items-center justify-between gap-3">
                      <div
                        className={`grid size-14 place-items-center rounded-[20px] shadow-sm ${iconWrapClassName}`}
                      >
                        <Icon className={`size-7 ${iconClassName}`} />
                      </div>
                      <Chip className={`rounded-full ${chipClassName}`} variant="soft">
                        {label}
                      </Chip>
                    </div>
                    <div className="space-y-2">
                      <Card.Title className="text-2xl text-slate-900">
                        {title}
                      </Card.Title>
                      <div className="h-px w-full bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />
                    </div>
                  </Card.Header>

                  <Card.Content className="space-y-5">
                    <Text className="text-sm leading-7 text-slate-600">
                      {description}
                    </Text>
                    <Link
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors group-hover:text-slate-900"
                      href={href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {href.replace(/^https?:\/\//, '')}
                      <ArrowTopRightOnSquareIcon className="size-4" />
                    </Link>
                  </Card.Content>

                  <Card.Footer className="pt-2">
                    <Button
                      className="rounded-full bg-slate-900 text-white"
                      onPress={() => openExternal(href)}
                    >
                      Mở ứng dụng
                    </Button>
                  </Card.Footer>
                </Card>
              ),
            )}
            </section>
          </Tabs.Panel>
        </Tabs.Root>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border border-white/70 bg-[linear-gradient(180deg,_rgba(255,255,255,0.9),_rgba(248,250,252,0.82))] shadow-xl shadow-slate-900/8">
          <Card.Header className="space-y-3">
            <Chip className="rounded-full bg-rose-50 text-rose-700" variant="soft">
              Liên hệ
            </Chip>
            <Card.Title className="font-['Manrope'] text-3xl text-slate-900">
              Kết nối với namhnz
            </Card.Title>
            <Card.Description className="text-slate-500">
              Nếu cần trao đổi nhanh, bạn có thể liên hệ trực tiếp qua các kênh dưới đây.
            </Card.Description>
          </Card.Header>
          <Card.Content className="grid gap-4">
            {contacts.map(({ label, value, href, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col gap-4 rounded-[24px] border border-slate-200 bg-slate-50/80 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="grid size-12 place-items-center rounded-2xl bg-white text-slate-700 shadow-sm">
                    <Icon className="size-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-900">{label}</p>
                    <p className="break-all text-sm text-slate-500">{value}</p>
                  </div>
                </div>
                <Button
                  className="rounded-full"
                  variant="outline"
                  onPress={() => openExternal(href)}
                >
                  Mở liên hệ
                </Button>
              </div>
            ))}
          </Card.Content>
        </Card>

        <Card className="border border-white/70 bg-[linear-gradient(135deg,_rgba(255,255,255,0.92),_rgba(241,245,249,0.95))] shadow-xl shadow-slate-900/8">
          <Card.Content className="flex h-full flex-col justify-between gap-6 p-6">
            <div className="space-y-3">
              <Chip className="rounded-full bg-slate-100 text-slate-700" variant="soft">
                Lời nhắn
              </Chip>
              <h2 className="font-['Manrope'] text-3xl font-bold tracking-tight text-slate-900">
                Made with love by namhnz
              </h2>
              <Text className="text-base leading-7 text-slate-600">
                Một landing page gọn gàng để mở nhanh các ứng dụng quan trọng, rõ ràng trên cả desktop lẫn mobile.
              </Text>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white/80 p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="grid size-12 place-items-center rounded-2xl bg-slate-900 text-white">
                  <Squares2X2Icon className="size-6" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">namhnz apps</p>
                  <p className="text-sm text-slate-500">laychu.com</p>
                </div>
              </div>
            </div>
          </Card.Content>
        </Card>
      </section>
    </main>
  )
}

export default App
