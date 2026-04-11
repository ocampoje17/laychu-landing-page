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
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
      <Surface className="overflow-hidden border border-white/60 bg-white/75 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
        <section className="grid gap-8 rounded-[28px] bg-[radial-gradient(circle_at_top_left,_rgba(93,214,198,0.22),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(255,191,117,0.22),_transparent_26%),linear-gradient(135deg,_rgba(255,255,255,0.82),_rgba(255,255,255,0.58))] p-5 sm:p-8 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0 space-y-6 self-center">
            <div className="flex items-center gap-4">
              <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/20">
                <Squares2X2Icon className="size-8" />
              </div>
              <Chip className="rounded-full bg-white/80 text-slate-700" variant="soft">
                namhnz
              </Chip>
            </div>

            <div className="space-y-4">
              <h1 className="text-balance font-['Manrope'] text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
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
          </div>

          <Card className="border border-white/70 bg-white/80 shadow-xl shadow-slate-900/8">
            <Card.Content className="p-4 sm:p-6">
              <div className="flex min-h-[320px] items-center justify-center overflow-hidden rounded-[28px] border border-slate-200 bg-white/70 p-3 sm:min-h-[420px] sm:p-5">
                <img
                  src="/room-image.png"
                  alt="Hình ảnh minh hoạ giao diện room"
                  className="h-auto max-h-full w-full object-contain"
                />
              </div>
            </Card.Content>
          </Card>
        </section>
      </Surface>

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
                  className="border border-white/70 bg-white/80 shadow-xl shadow-slate-900/8"
                >
                  <Card.Header className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div
                        className={`grid size-14 place-items-center rounded-2xl ${iconWrapClassName}`}
                      >
                        <Icon className={`size-7 ${iconClassName}`} />
                      </div>
                      <Chip className={`rounded-full ${chipClassName}`} variant="soft">
                        {label}
                      </Chip>
                    </div>
                    <div className="space-y-1">
                      <Card.Title className="text-2xl text-slate-900">
                        {title}
                      </Card.Title>
                    </div>
                  </Card.Header>

                  <Card.Content className="space-y-4">
                    <Text className="text-sm leading-7 text-slate-600">
                      {description}
                    </Text>
                    <Link
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-700"
                      href={href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {href.replace(/^https?:\/\//, '')}
                      <ArrowTopRightOnSquareIcon className="size-4" />
                    </Link>
                  </Card.Content>

                  <Card.Footer>
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

      <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border border-white/70 bg-white/80 shadow-xl shadow-slate-900/8">
          <Card.Header className="space-y-2">
            <Chip className="rounded-full bg-rose-50 text-rose-700" variant="soft">
              Liên hệ
            </Chip>
            <Card.Title className="text-2xl text-slate-900">
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
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 sm:flex-row sm:items-center sm:justify-between"
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

        <Card className="border border-white/70 bg-white/80 shadow-xl shadow-slate-900/8">
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

            <div className="rounded-3xl border border-slate-200 bg-[linear-gradient(135deg,_rgba(255,255,255,0.92),_rgba(241,245,249,0.95))] p-5">
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
