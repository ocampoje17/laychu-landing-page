# laychu-landing-page

Landing page cho he sinh thai ung dung cua `namhnz`.

## Noi dung

- Dieu huong toi `https://translate.laychu.com/`
- Dieu huong toi `https://vigiayto.laychu.com/`
- Dieu huong toi `http://semit.laychu.com/`
- Hien thi lien he Gmail `namqhong@gmail.com`
- Hien thi Telegram `@namhnz`

## Cong nghe

- React 19
- TypeScript
- Vite
- HeroUI
- Tailwind CSS 4
- `@heroicons/react`

## Chay local

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

- Repository Pages URL hien tai: `https://ocampoje17.github.io/laychu-landing-page/`
- Neu dung custom domain nhu `laychu.com`, build hien da cau hinh theo root domain (`/`)
- Workflow deploy tu dong nam tai `.github/workflows/deploy.yml`
- Trong GitHub: vao `Settings` -> `Pages` -> chon `Source` la `GitHub Actions`

## Google Analytics 4

Landing page dùng Measurement ID `G-QL0RJ8863V`. Google tag chỉ được tải sau khi
người dùng đồng ý Analytics trong banner cookie; không cần dán thêm snippet vào
Google Tag Manager hoặc vào `index.html`.

### 1. Kiểm tra Data stream

1. Mở [Google Analytics](https://analytics.google.com/) và chọn đúng GA4 Property.
2. Vào **Admin** → **Data collection and modification** → **Data streams** → chọn
   web stream của `laychu.com`.
3. Xác nhận **Measurement ID** là `G-QL0RJ8863V`.
4. Deploy landing page, mở trang ở một cửa sổ ẩn danh, chọn **Allow analytics**
   trong banner, rồi dùng [Tag Assistant](https://tagassistant.google.com/) hoặc
   **Reports** → **Realtime** để xác nhận page view đầu tiên.

### 2. Dữ liệu click được gửi từ landing page

Mỗi lần người dùng bấm **Khám phá sản phẩm**, landing page gửi chính xác một event
`select_product`. Event chỉ được gửi khi Analytics đã được cho phép và gồm các tham số:

| Event parameter | Giá trị | Mục đích |
| --- | --- | --- |
| `product_name` | Tên thương hiệu ổn định, ví dụ `Instant Translate` | Hiển thị tên sản phẩm trong báo cáo |
| `product_id` | Slug cố định, ví dụ `instant-translate` | Định danh sản phẩm không phụ thuộc bản dịch |
| `platform_group` | `desktop`, `mobile` hoặc `web` | Biết click đến từ section nào |
| `language` | `en`, `vi`, `zh-CN`, `ja`, `ko`, `es` hoặc `fr` | So sánh ngôn ngữ giao diện |
| `destination_domain` | Domain của sản phẩm đích | Phân biệt website đích |

Đây là lượt click rời landing page, không phải lượt cài đặt, đăng ký hoặc sử dụng sản
phẩm ở website đích. Vì vậy event này không được đánh dấu là **Key event**.

### 3. Tạo Custom dimensions

Tạo các dimension này **trước khi phát hành**. Custom dimensions chỉ hiển thị dữ liệu
nhận được sau khi được tạo và thường mất đến 24–48 giờ để xuất hiện trong báo cáo.

1. Vào **Admin** → **Data display** → **Custom definitions**.
2. Mở tab **Custom dimensions** và chọn **Create custom dimension**.
3. Với từng dòng trong bảng dưới, chọn **Scope: Event**, **Dimension type: Text**,
   rồi điền đúng tên event parameter. Lưu xong, lặp lại cho dòng tiếp theo.

| Dimension name hiển thị | Event parameter |
| --- | --- |
| Product name | `product_name` |
| Product ID | `product_id` |
| Platform group | `platform_group` |
| Interface language | `language` |
| Destination domain | `destination_domain` |

### 4. Tạo báo cáo số click từng sản phẩm

1. Vào **Explore** → **Blank** và đổi tên exploration thành `Product outbound clicks`.
2. Trong **Variables**, thêm các dimensions: **Event name**, **Product name**,
   **Platform group**, **Interface language** và **Destination domain**. Thêm metric
   **Event count**.
3. Trong **Tab settings**, kéo **Product name** vào **Rows** và **Event count** vào
   **Values**.
4. Trong **Filters**, thêm điều kiện **Event name exactly matches `select_product`**.
5. Để phân tích sâu hơn, kéo một trong **Platform group**, **Interface language** hoặc
   **Destination domain** vào **Breakdown**. Chỉ dùng một breakdown mỗi lần để bảng dễ đọc.
6. Lưu exploration. Cột **Event count** là số lần người dùng click nút của từng sản phẩm
   trong khoảng thời gian đã chọn ở góc trên bên phải.

### 5. Kiểm tra khi phát hành

- Chọn **Allow analytics**, click một sản phẩm và mở **Admin** → **DebugView** để xem
  event `select_product` cùng năm tham số ở trên.
- Chọn **Decline** hoặc chưa chọn banner: Developer Tools → Network không được có request
  đến `googletagmanager.com`.
- Thi Thử App xuất hiện trong hai section. `platform_group` sẽ là `desktop` hoặc `mobile`
  theo đúng section mà người dùng đã click.
