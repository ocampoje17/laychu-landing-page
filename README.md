# laychu-landing-page

Landing page tiếng Việt cho hệ sinh thái ứng dụng của `namhnz`.

## Nội dung

- Điều hướng tới `https://translate.laychu.com/`
- Điều hướng tới `https://vigiayto.laychu.com/`
- Hiển thị liên hệ Gmail `namqhong@gmail.com`
- Hiển thị Telegram `@namhnz`

## Công nghệ

- React 19
- TypeScript
- Vite
- `liquid-glass-react`
- `@heroicons/react`

## Chạy local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run lint
```

## GitHub Pages

- Repository Pages URL hiện tại: `https://ocampoje17.github.io/laychu-landing-page/`
- Nếu dùng custom domain như `laychu.com`, build hiện đã cấu hình theo root domain (`/`)
- Workflow deploy tự động nằm tại `.github/workflows/deploy.yml`
- Trong GitHub: vào `Settings` -> `Pages` -> chọn `Source` là `GitHub Actions`
