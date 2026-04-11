import { useRef } from 'react'
import type { ComponentType, SVGProps } from 'react'
import LiquidGlass from 'liquid-glass-react'
import {
  ArrowTopRightOnSquareIcon,
  DocumentMagnifyingGlassIcon,
  EnvelopeIcon,
  LanguageIcon,
  PaperAirplaneIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'
import { Squares2X2Icon } from '@heroicons/react/24/solid'

function App() {
  const stageRef = useRef<HTMLDivElement>(null)

  type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

  const appLinks: Array<{
    title: string
    description: string
    href: string
    label: string
    accent: string
    icon: IconComponent
  }> = [
    {
      title: 'Laychu Translate',
      description:
        'Dịch nhanh, gọn và dễ dùng cho những nhu cầu xử lý ngôn ngữ hằng ngày.',
      href: 'https://translate.laychu.com/',
      label: 'Công cụ dịch thuật',
      accent: 'teal',
      icon: LanguageIcon,
    },
    {
      title: 'Ví Giấy Tờ',
      description:
        'Không gian tập trung để quản lý giấy tờ số, truy cập hồ sơ và thao tác thuận tiện hơn.',
      href: 'https://vigiayto.laychu.com/',
      label: 'Hồ sơ số',
      accent: 'amber',
      icon: DocumentMagnifyingGlassIcon,
    },
  ]

  const contacts: Array<{
    label: string
    value: string
    href: string
    icon: IconComponent
  }> = [
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

  return (
    <main className="page-shell" ref={stageRef}>
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />
      <div className="ambient ambient-bottom" aria-hidden="true" />

      <section className="hero-section">
        <LiquidGlass
          mouseContainer={stageRef}
          displacementScale={72}
          blurAmount={0.08}
          saturation={150}
          aberrationIntensity={1.4}
          elasticity={0.24}
          cornerRadius={40}
          padding="0px"
          overLight
          mode="prominent"
          style={{ width: '100%' }}
        >
          <div className="hero-card">
            <div className="hero-topline">
              <span className="eyebrow">
                <SparklesIcon className="eyebrow-icon" />
                App hub
              </span>
              <span className="eyebrow-muted">React + TypeScript + Liquid Glass</span>
            </div>

            <div className="hero-copy">
              <div className="brand-lockup">
                <div className="brand-mark" aria-hidden="true">
                  <Squares2X2Icon />
                </div>
                <div>
                  <p className="brand-name">namhnz apps</p>
                  <h1>Trang chủ các ứng dụng của Nam</h1>
                </div>
              </div>

              <p className="hero-description">
                Một điểm truy cập gọn gàng để mở nhanh các sản phẩm đang chạy trên
                hệ sinh thái Laychu.
              </p>
            </div>

            <div className="hero-meta">
              <div className="hero-stat">
                <strong>02</strong>
                <span>ứng dụng đang mở cho người dùng</span>
              </div>
              <div className="hero-stat">
                <strong>01</strong>
                <span>trang chủ chung để điều hướng nhanh</span>
              </div>
            </div>

            <div className="contact-row">
              {contacts.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  className="contact-chip"
                  href={href}
                  target={href.startsWith('https://') ? '_blank' : undefined}
                  rel={href.startsWith('https://') ? 'noreferrer' : undefined}
                >
                  <Icon className="contact-icon" aria-hidden="true" />
                  <span className="contact-label">{label}</span>
                  <span className="contact-value">{value}</span>
                </a>
              ))}
            </div>
          </div>
        </LiquidGlass>
      </section>

      <section className="apps-grid" aria-label="Danh sách ứng dụng">
        {appLinks.map(({ title, description, href, label, accent, icon: Icon }) => (
          <a
            key={title}
            className="app-link"
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Mở ${title}`}
          >
            <LiquidGlass
              mouseContainer={stageRef}
              displacementScale={64}
              blurAmount={0.09}
              saturation={155}
              aberrationIntensity={1.25}
              elasticity={0.2}
              cornerRadius={34}
              padding="0px"
              overLight
              mode="prominent"
              style={{ width: '100%' }}
            >
              <article className={`app-card app-card-${accent}`}>
                <div className="app-card-head">
                  <div className="app-icon-wrap" aria-hidden="true">
                    <Icon className="app-icon" />
                  </div>
                  <span className="app-badge">{label}</span>
                </div>

                <div className="app-body">
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>

                <div className="app-foot">
                  <span className="app-url">{href.replace('https://', '')}</span>
                  <ArrowTopRightOnSquareIcon
                    className="app-arrow"
                    aria-hidden="true"
                  />
                </div>
              </article>
            </LiquidGlass>
          </a>
        ))}
      </section>

      <footer className="footer-note">
        Các liên kết đều mở sang tab mới để truy cập trực tiếp vào từng ứng dụng.
      </footer>
    </main>
  )
}

export default App
