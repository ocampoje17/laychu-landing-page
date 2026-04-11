import type { ComponentType, SVGProps } from 'react'
import {
  Accordion,
  Button,
  Card,
  Chip,
  Kbd,
  Link,
  ProgressBar,
  Surface,
  Tabs,
  Text,
} from '@heroui/react'
import {
  ArrowTopRightOnSquareIcon,
  BoltIcon,
  DocumentMagnifyingGlassIcon,
  EnvelopeIcon,
  FolderOpenIcon,
  GlobeAltIcon,
  LanguageIcon,
  PaperAirplaneIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'
import { Squares2X2Icon } from '@heroicons/react/24/solid'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

type AppLink = {
  title: string
  description: string
  href: string
  label: string
  status: string
  icon: IconComponent
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
      'Dich nhanh, gon va de dung cho nhung nhu cau xu ly ngon ngu hang ngay.',
    href: 'https://translate.laychu.com/',
    label: 'Cong cu dich thuat',
    status: 'Cong khai',
    icon: LanguageIcon,
  },
  {
    title: 'Vi Giay To',
    description:
      'Khong gian tap trung de quan ly giay to so, truy cap ho so va thao tac thuan tien hon.',
    href: 'https://vigiayto.laychu.com/',
    label: 'Ho so so',
    status: 'Cong khai',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: 'SEMIT',
    description:
      'Diem truy cap rieng cho he thong SEMIT, phuc vu mo nhanh va lam viec truc tiep tren nen tang.',
    href: 'http://semit.laychu.com/',
    label: 'He thong noi bo',
    status: 'Noi bo',
    icon: FolderOpenIcon,
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

const deploymentNotes = [
  {
    id: 'pages',
    title: 'GitHub Pages',
    body: 'Repo da co workflow deploy tu dong tu nhanh main. Chi can bat Source la GitHub Actions trong phan Pages.',
  },
  {
    id: 'dns',
    title: 'Cloudflare DNS',
    body: 'Neu dung laychu.com, apex domain nen tro dung ve GitHub Pages, sau do moi bat HTTPS khi domain da xac thuc xong.',
  },
  {
    id: 'content',
    title: 'Cap nhat ung dung',
    body: 'Moi khi them app moi, chi can sua danh sach trong landing page roi push len main de site tu redeploy.',
  },
]

function App() {
  const openExternal = (href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
      <Surface className="overflow-hidden border border-white/60 bg-white/75 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
        <section className="grid gap-6 rounded-[28px] bg-[radial-gradient(circle_at_top_left,_rgba(93,214,198,0.22),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(255,191,117,0.22),_transparent_26%),linear-gradient(135deg,_rgba(255,255,255,0.82),_rgba(255,255,255,0.58))] p-5 sm:p-8 xl:grid-cols-[1.4fr_0.9fr]">
          <div className="min-w-0 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Chip
                className="rounded-full border border-teal-200 bg-teal-50/80 text-teal-700"
                variant="soft"
              >
                <SparklesIcon className="mr-2 size-4" />
                HeroUI landing page
              </Chip>
              <Chip
                className="rounded-full border border-slate-200 bg-white/70 text-slate-600"
                variant="tertiary"
              >
                React 19 + Tailwind CSS 4
              </Chip>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/20">
                  <Squares2X2Icon className="size-8" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
                    namhnz apps
                  </p>
                  <h1 className="mt-2 text-balance font-['Manrope'] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                    Trang chu cac ung dung cua Nam
                  </h1>
                </div>
              </div>

              <Text className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                Chuyen sang HeroUI giup layout on dinh hon, component dong bo hon,
                va viec mo rong landing page ve sau don gian hon nhieu so voi tu can
                tung khoi giao dien.
              </Text>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                className="rounded-full bg-slate-900 text-white"
                onPress={() => openExternal(appLinks[0]!.href)}
              >
                Mo nhanh Translate
              </Button>
              <Button
                className="rounded-full"
                variant="outline"
                onPress={() => openExternal('mailto:namqhong@gmail.com')}
              >
                Lien he Gmail
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="font-medium">Dieu huong nhanh</span>
              <Kbd>G</Kbd>
              <span>GitHub Pages</span>
              <Kbd>D</Kbd>
              <span>DNS / Domain</span>
              <Kbd>A</Kbd>
              <span>Apps</span>
            </div>
          </div>

          <Card className="border border-white/70 bg-white/80 shadow-xl shadow-slate-900/8">
            <div className="px-4 pt-4 sm:px-6 sm:pt-6">
              <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100 shadow-sm">
                <img
                  src="/room-image.png"
                  alt="Khong gian giao dien room preview"
                  className="h-56 w-full object-cover sm:h-64"
                />
              </div>
            </div>
            <Card.Header className="flex flex-col items-start gap-2">
              <Chip className="rounded-full bg-slate-900 text-white" variant="primary">
                Tinh trang he sinh thai
              </Chip>
              <Card.Title className="text-xl font-semibold text-slate-900">
                3 ung dung dang hien thi
              </Card.Title>
              <Card.Description className="text-slate-500">
                Landing page nay hien gom toan bo diem truy cap chinh cua Nam vao
                mot noi duy nhat.
              </Card.Description>
            </Card.Header>
            <Card.Content className="space-y-5">
              <ProgressBar
                aria-label="Tien do hien thi ung dung"
                className="w-full"
                maxValue={3}
                value={3}
              />

              <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                {appLinks.map(({ title, label, status, icon: Icon }) => (
                  <div
                    key={title}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3"
                  >
                    <div className="grid size-11 place-items-center rounded-xl bg-white text-slate-700 shadow-sm">
                      <Icon className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-semibold text-slate-900">{title}</p>
                      <p className="truncate text-sm text-slate-500">
                        {label} · {status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Content>
          </Card>
        </section>
      </Surface>

      <Tabs.Root className="w-full" defaultSelectedKey="apps">
        <Tabs.ListContainer className="overflow-x-auto pb-1">
          <Tabs.List
            aria-label="Khu vuc noi dung"
            className="flex min-w-max gap-2 rounded-full border border-white/70 bg-white/70 p-2 shadow-lg shadow-slate-900/5"
          >
            <Tabs.Tab id="apps">Ung dung</Tabs.Tab>
            <Tabs.Tab id="contacts">Lien he</Tabs.Tab>
            <Tabs.Tab id="deploy">Trien khai</Tabs.Tab>
          </Tabs.List>
        </Tabs.ListContainer>

        <Tabs.Panel id="apps" className="pt-6">
          <section className="grid gap-5 lg:grid-cols-3">
            {appLinks.map(({ title, description, href, label, status, icon: Icon }) => (
              <Card
                key={title}
                className="border border-white/70 bg-white/80 shadow-xl shadow-slate-900/8"
              >
                <Card.Header className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="grid size-12 place-items-center rounded-2xl bg-slate-900 text-white">
                      <Icon className="size-6" />
                    </div>
                    <Chip className="rounded-full" variant="tertiary">
                      {status}
                    </Chip>
                  </div>
                  <div className="space-y-1">
                    <Card.Title className="text-xl text-slate-900">{title}</Card.Title>
                    <Card.Description className="text-slate-500">
                      {label}
                    </Card.Description>
                  </div>
                </Card.Header>

                <Card.Content className="space-y-4">
                  <Text className="text-sm leading-6 text-slate-600">
                    {description}
                  </Text>
                  <Link
                    className="inline-flex items-center gap-2 text-sm font-medium text-teal-700"
                    href={href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {href.replace(/^https?:\/\//, '')}
                    <ArrowTopRightOnSquareIcon className="size-4" />
                  </Link>
                </Card.Content>

                <Card.Footer className="flex items-center justify-between gap-3">
                  <Chip className="bg-slate-100 text-slate-600" variant="soft">
                    Live
                  </Chip>
                  <Button
                    className="rounded-full bg-slate-900 text-white"
                    onPress={() => openExternal(href)}
                  >
                    Truy cap
                  </Button>
                </Card.Footer>
              </Card>
            ))}
          </section>
        </Tabs.Panel>

        <Tabs.Panel id="contacts" className="pt-6">
          <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="border border-white/70 bg-white/80 shadow-xl shadow-slate-900/8">
              <Card.Header className="space-y-2">
                <Chip className="w-fit bg-amber-50 text-amber-700" variant="soft">
                  Kenh lien he
                </Chip>
                <Card.Title className="text-xl text-slate-900">
                  Ket noi voi Nam
                </Card.Title>
                <Card.Description className="text-slate-500">
                  Hai kenh lien he chinh dang hien thi truc tiep ngay tren landing page.
                </Card.Description>
              </Card.Header>
              <Card.Content className="grid gap-4">
                {contacts.map(({ label, value, href, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="grid size-11 place-items-center rounded-xl bg-white text-slate-700 shadow-sm">
                        <Icon className="size-5" />
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
                      Mo
                    </Button>
                  </div>
                ))}
              </Card.Content>
            </Card>

            <Card className="border border-white/70 bg-white/80 shadow-xl shadow-slate-900/8">
              <Card.Header className="space-y-2">
                <Chip className="w-fit bg-sky-50 text-sky-700" variant="soft">
                  Domain
                </Chip>
                <Card.Title className="text-xl text-slate-900">
                  Trang thai public endpoint
                </Card.Title>
              </Card.Header>
              <Card.Content className="space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                  <div className="mb-2 flex items-center gap-2 text-slate-700">
                    <GlobeAltIcon className="size-5" />
                    <span className="font-medium">Trang chu</span>
                  </div>
                  <Text className="break-all text-sm text-slate-600">
                    https://laychu.com
                  </Text>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                  <div className="mb-2 flex items-center gap-2 text-slate-700">
                    <BoltIcon className="size-5" />
                    <span className="font-medium">Deploy mode</span>
                  </div>
                  <Text className="text-sm text-slate-600">
                    GitHub Pages + Cloudflare DNS
                  </Text>
                </div>
              </Card.Content>
            </Card>
          </section>
        </Tabs.Panel>

        <Tabs.Panel id="deploy" className="pt-6">
          <section className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
            <Card className="border border-white/70 bg-white/80 shadow-xl shadow-slate-900/8">
              <Card.Header className="space-y-2">
                <Chip className="w-fit bg-emerald-50 text-emerald-700" variant="soft">
                  Ghi chu van hanh
                </Chip>
                <Card.Title className="text-xl text-slate-900">
                  Checklist trien khai
                </Card.Title>
              </Card.Header>
              <Card.Content>
                <Accordion.Root
                  className="w-full"
                  defaultExpandedKeys={['pages']}
                  variant="surface"
                >
                  {deploymentNotes.map(({ id, title, body }) => (
                    <Accordion.Item id={id} key={id}>
                      <Accordion.Heading>
                        <Accordion.Trigger>{title}</Accordion.Trigger>
                      </Accordion.Heading>
                      <Accordion.Panel>
                        <Accordion.Body>{body}</Accordion.Body>
                      </Accordion.Panel>
                    </Accordion.Item>
                  ))}
                </Accordion.Root>
              </Card.Content>
            </Card>

            <Card className="border border-white/70 bg-white/80 shadow-xl shadow-slate-900/8">
              <Card.Header className="space-y-2">
                <Chip className="w-fit bg-violet-50 text-violet-700" variant="soft">
                  Cong nghe
                </Chip>
                <Card.Title className="text-xl text-slate-900">
                  Stack hien tai
                </Card.Title>
              </Card.Header>
              <Card.Content className="flex flex-wrap gap-2">
                {['HeroUI', 'Tailwind CSS 4', 'React 19', 'TypeScript', 'Vite'].map(
                  (item) => (
                    <Chip key={item} className="rounded-full" variant="tertiary">
                      {item}
                    </Chip>
                  ),
                )}
              </Card.Content>
            </Card>
          </section>
        </Tabs.Panel>
      </Tabs.Root>
    </main>
  )
}

export default App
