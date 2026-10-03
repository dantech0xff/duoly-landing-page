import type { LegalDocument } from '@/components/legal-page';
import { SITE, type Lang } from '../site';

const MAILTO = `mailto:${SITE.email}`;

/** Trang Google giải thích cách họ dùng dữ liệu từ app dùng dịch vụ quảng cáo của họ. */
const GOOGLE_PARTNER_SITES = 'https://policies.google.com/technologies/partner-sites';

const VI: LegalDocument = {
  eyebrow: 'PHÁP LÝ',
  title: 'Chính sách quyền riêng tư',
  meta: 'Hiệu lực từ: 03/10/2026 · Bên kiểm soát dữ liệu: TRAN HUU DANH (nhà phát triển cá nhân), 1010 Creative',
  summary: (
    <>
      <strong>Tóm tắt bằng lời thường:</strong> ghi chú của hai bạn là của hai
      bạn. Chúng tôi không bán và không bao giờ chia sẻ ghi chú, ảnh hay tin
      nhắn với bên quảng cáo. Bản Free có quảng cáo thưởng mà bạn tự chọn xem
      để đổi một lượt AI viết. Để hiển thị và đo lường quảng cáo, Google thu
      thập <strong>mã định danh thiết bị (device ID)</strong> và{' '}
      <strong>mã định danh quảng cáo (ad ID)</strong>, và có thể dùng chúng để
      theo dõi (tracking) và cá nhân hoá quảng cáo theo lựa chọn của bạn.
      Premium không có quảng cáo. Bạn có thể xóa mọi thứ ngay trong app.
    </>
  ),
  sections: [
    {
      heading: '1. Dữ liệu chúng tôi xử lý',
      paragraphs: [
        <>
          <strong>Nội dung bạn tạo:</strong> ghi chú, ảnh, ngày bắt đầu, ngày
          quan trọng, tâm trạng, lời tự nhắn, tên và ảnh đại diện hai bạn. Phần
          lớn được lưu ngay trên thiết bị; một phần được đồng bộ lên máy chủ khi
          bạn đăng nhập để sao lưu và khôi phục.
        </>,
        <>
          <strong>Thông tin tài khoản:</strong> email hoặc thông tin đăng nhập
          bạn dùng để tạo tài khoản đồng bộ.
        </>,
        <>
          <strong>Dữ liệu mua hàng:</strong> trạng thái quyền lợi Premium (qua
          Google Play, App Store và RevenueCat) — chúng tôi không nhận số thẻ
          hay thông tin thanh toán của bạn.
        </>,
        <>
          <strong>Mã định danh thiết bị và quảng cáo:</strong> mã định danh gắn
          với thiết bị hoặc bản cài đặt app (device ID) và mã định danh quảng
          cáo (ad ID — Advertising ID trên Android, IDFA trên iOS khi bạn cho
          phép). Đây là hai loại dữ liệu được dùng để theo dõi (tracking) phục
          vụ quảng cáo, xem mục 3.
        </>,
        <>
          <strong>Dữ liệu quảng cáo:</strong> khi bạn xem quảng cáo, SDK quảng
          cáo của Google thu thập tương tác với quảng cáo, địa chỉ IP và vị trí
          gần đúng suy ra từ IP, thông tin thiết bị (dòng máy, hệ điều hành,
          ngôn ngữ) và dữ liệu chẩn đoán, hiệu năng.
        </>,
        <>
          <strong>Dữ liệu kỹ thuật:</strong> báo lỗi, số liệu hiệu năng và số
          liệu sử dụng (ví dụ màn hình đã mở, thao tác lưu ghi chú) qua
          Firebase. Các số liệu này không chứa nội dung ghi chú.
        </>,
      ],
    },
    {
      heading: '2. Chúng tôi dùng dữ liệu để làm gì',
      paragraphs: [
        'Để vận hành các tính năng bạn dùng, đồng bộ và khôi phục dữ liệu giữa các thiết bị của bạn, xác nhận quyền lợi Premium, gửi thông báo bạn đã bật, sửa lỗi và hiểu cách app được dùng.',
        'Ở bản Free, còn để hiển thị quảng cáo thưởng, cá nhân hoá quảng cáo khi được phép, đo lường hiệu quả quảng cáo, giới hạn tần suất hiển thị, và phát hiện gian lận hoặc lạm dụng phần thưởng.',
        'Ở Khu vực Kinh tế châu Âu (EEA) và Vương quốc Anh: quảng cáo cá nhân hoá, cùng việc lưu và đọc mã định danh cho mục đích đó, dựa trên sự đồng ý của bạn; vận hành tính năng dựa trên việc cung cấp dịch vụ bạn yêu cầu; báo lỗi, bảo mật và chống gian lận dựa trên lợi ích chính đáng.',
      ],
    },
    {
      heading: '3. Quảng cáo và theo dõi (tracking)',
      paragraphs: [
        <>
          <strong>Quảng cáo chỉ hiện khi bạn chọn.</strong> Ở bản Free, khi bạn
          muốn AI viết, app mời bạn xem một quảng cáo thưởng (Google AdMob) để
          đổi một lượt, hoặc mở Premium. Không banner, không quảng cáo xen ngang,
          không quảng cáo tự bật lên. Premium và thời gian dùng thử không có
          quảng cáo, và app không khởi động SDK quảng cáo trong các phiên đó.
        </>,
        <>
          <strong>Theo dõi nghĩa là gì ở đây:</strong> khi được phép, Google dùng
          device ID và ad ID để liên kết hoạt động trong app này với dữ liệu từ
          app và website của công ty khác, nhằm hiển thị quảng cáo phù hợp hơn
          và đo lường hiệu quả quảng cáo. Chúng tôi không bán dữ liệu cho bên
          môi giới dữ liệu. Firebase Analytics trong app không đọc ad ID.
        </>,
        <>
          <strong>Sự đồng ý:</strong> ở EEA, Vương quốc Anh và các bang của Mỹ
          có luật riêng tư, form đồng ý của Google hiện trước quảng cáo đầu
          tiên và quyết định quảng cáo có được cá nhân hoá hay không. Trên iOS,
          app hỏi quyền theo dõi (App Tracking Transparency) đúng lúc bạn bấm
          xem quảng cáo, không bao giờ lúc mở app. Nếu bạn không cho phép, app
          không đọc IDFA và quảng cáo không được cá nhân hoá — bạn vẫn nhận
          lượt viết như thường. Ở các khu vực khác trên Android, quảng cáo được
          cá nhân hoá bằng Advertising ID trừ khi bạn tắt trong cài đặt thiết
          bị.
        </>,
        'Quảng cáo không cá nhân hoá vẫn dùng một số dữ liệu (như địa chỉ IP, vị trí gần đúng, thông tin thiết bị) để phân phối, giới hạn tần suất, thống kê tổng hợp và chống gian lận.',
        <>
          <strong>Lựa chọn của bạn:</strong> rút lại hoặc thay đổi sự đồng ý
          bất cứ lúc nào qua dòng &quot;Lựa chọn quảng cáo&quot; ở tab Chúng
          mình (hiện ở những nơi cần sự đồng ý). Trên Android, đặt lại hoặc xóa
          Advertising ID trong Cài đặt › Google › Quảng cáo. Trên iOS, đổi quyền
          trong Cài đặt › Quyền riêng tư &amp; Bảo mật › Theo dõi. Hoặc dùng
          Premium để không còn quảng cáo.
        </>,
        <>
          Ở một số bang của Mỹ, việc chia sẻ mã định danh cho quảng cáo cá nhân
          hoá có thể được luật coi là &quot;bán&quot; hoặc &quot;chia sẻ&quot;
          dữ liệu cá nhân. Bạn có thể từ chối qua form của Google hoặc dòng
          &quot;Lựa chọn quảng cáo&quot; nói trên. Cách Google dùng dữ liệu:{' '}
          <a href={GOOGLE_PARTNER_SITES}>policies.google.com/technologies/partner-sites</a>.
        </>,
      ],
    },
    {
      heading: '4. Những điều chúng tôi không làm',
      paragraphs: [
        'Không bán ghi chú, ảnh, tin nhắn hay bất kỳ nội dung nào bạn tạo. Không chia sẻ nội dung đó, tên hay email của bạn với bên quảng cáo, và không dùng nội dung riêng tư để nhắm quảng cáo. Không đưa nội dung ghi chú đầy đủ lên widget, thông báo hay bất kỳ bề mặt công khai nào — các bề mặt này chỉ dùng nội dung chung chung hoặc metadata giới hạn (widget chỉ biết hôm nay đã viết hay chưa; dòng duy nhất nó in nguyên văn là lời tự nhắn bạn chủ động để lại). Không suy diễn hay mô phỏng hành động của người yêu bạn.',
      ],
    },
    {
      heading: '5. Tính năng AI viết cùng',
      paragraphs: [
        'Khi bạn chủ động bấm dùng gợi ý AI, đoạn nội dung liên quan được gửi đến dịch vụ AI (Firebase AI Logic của Google) để tạo gợi ý, theo điều khoản dịch vụ của Google. Chúng tôi không dùng nội dung này cho quảng cáo. Không bấm — không gì được gửi đi.',
      ],
    },
    {
      heading: '6. Lưu trữ và bảo mật',
      paragraphs: [
        'Dữ liệu được lưu trên thiết bị của bạn và, khi bạn đăng nhập, trên hạ tầng đám mây (Supabase). Dữ liệu được mã hóa khi truyền. Tính năng khóa ứng dụng là một lớp chặn mở app trên thiết bị — chúng tôi không gọi nó là mã hóa, vì nó không phải.',
      ],
    },
    {
      heading: '7. Dịch vụ bên thứ ba',
      paragraphs: [
        'Ứng dụng dùng: Supabase (đồng bộ, tài khoản), Google Firebase (báo lỗi, phân tích, hiệu năng, thông báo, AI), Google AdMob và Google User Messaging Platform (quảng cáo, form đồng ý), RevenueCat, Google Play và App Store (thanh toán, quyền lợi). Mỗi dịch vụ xử lý dữ liệu theo chính sách riêng của họ; chúng tôi chỉ chia sẻ phần tối thiểu để tính năng hoạt động.',
      ],
    },
    {
      heading: '8. Lưu giữ và xóa',
      paragraphs: [
        'Dữ liệu được giữ chừng nào bạn còn dùng dịch vụ. Bạn có thể xóa ghi chú, ảnh hoặc toàn bộ tài khoản ngay trong app (tab Chúng mình); dữ liệu đồng bộ sẽ được xóa khỏi máy chủ trong thời gian hợp lý. Đăng xuất xóa mã định danh app dùng cho phân tích và báo lỗi trên thiết bị đó. Dữ liệu quảng cáo do Google lưu giữ theo chính sách của Google; bạn có thể đặt lại ad ID bất cứ lúc nào. Cần hỗ trợ, email chúng tôi.',
      ],
    },
    {
      heading: '9. Trẻ em',
      paragraphs: [
        'Ứng dụng dành cho người từ 13 tuổi trở lên và không cố ý thu thập dữ liệu của trẻ dưới 13 tuổi.',
      ],
    },
    {
      heading: '10. Quyền của bạn',
      paragraphs: [
        <>
          Bạn có quyền truy cập, sửa, xuất và xóa dữ liệu của mình, rút lại sự
          đồng ý cho quảng cáo cá nhân hoá bất cứ lúc nào, và từ chối việc dữ
          liệu được dùng cho quảng cáo cá nhân hoá. Phần lớn thực hiện được ngay
          trong app hoặc cài đặt thiết bị; phần còn lại, email{' '}
          <a href={MAILTO}>{SITE.email}</a> — phản hồi trong 2–3 ngày làm việc.
          Bạn cũng có quyền khiếu nại với cơ quan bảo vệ dữ liệu nơi bạn sống.
        </>,
      ],
    },
    {
      heading: '11. Thay đổi chính sách',
      paragraphs: [
        'Thay đổi đáng kể sẽ được thông báo trong app hoặc trên trang này trước khi có hiệu lực, kèm ngày hiệu lực mới ở đầu trang.',
      ],
    },
  ],
};

const EN: LegalDocument = {
  eyebrow: 'LEGAL',
  title: 'Privacy Policy',
  meta: 'Effective: 3 Oct 2026 · Data controller: TRAN HUU DANH (individual developer), 1010 Creative',
  summary: (
    <>
      <strong>Plain-language summary:</strong> your notes are yours. We never
      sell your notes, photos or messages, and never share them with
      advertisers. The Free tier has rewarded ads you choose to watch in
      exchange for an AI write. To show and measure those ads, Google collects
      your <strong>device ID</strong> and{' '}
      <strong>advertising ID (ad ID)</strong>, and may use them for tracking
      and personalised ads, according to the choices you make. Premium has no
      ads. You can delete everything right in the app.
    </>
  ),
  sections: [
    {
      heading: '1. Data we process',
      paragraphs: [
        <>
          <strong>Content you create:</strong> notes, photos, your start date,
          important dates, moods, self-notes, your names and avatars. Most of it
          lives on your device; some syncs to servers when you sign in, for
          backup and restore.
        </>,
        <>
          <strong>Account information:</strong> the email or sign-in you use for
          the sync account.
        </>,
        <>
          <strong>Purchase data:</strong> Premium entitlement status (via Google
          Play, the App Store and RevenueCat) — we never receive your card or
          payment details.
        </>,
        <>
          <strong>Device and advertising identifiers:</strong> identifiers tied
          to your device or app install (device ID) and your advertising ID (ad
          ID — the Advertising ID on Android, the IDFA on iOS when you allow
          it). These are the two kinds of data used for tracking, for
          advertising; see section 3.
        </>,
        <>
          <strong>Advertising data:</strong> when you watch an ad, Google&apos;s
          ads SDK collects your interactions with the ad, your IP address and
          the approximate location derived from it, device information (model,
          operating system, language) and diagnostic and performance data.
        </>,
        <>
          <strong>Technical data:</strong> crash reports, performance metrics
          and usage metrics (for example, which screens were opened, or that a
          note was saved) via Firebase. These metrics never contain note
          content.
        </>,
      ],
    },
    {
      heading: '2. What we use it for',
      paragraphs: [
        'To run the features you use, sync and restore your data across your devices, verify Premium entitlement, deliver notifications you turned on, fix bugs and understand how the App is used.',
        'In the Free tier, also to show rewarded ads, personalise ads where permitted, measure ad performance, cap how often ads are shown, and detect fraud or abuse of rewards.',
        'In the European Economic Area (EEA) and the UK: personalised ads, and storing and reading identifiers for that purpose, rely on your consent; running features relies on providing the service you asked for; crash reporting, security and fraud prevention rely on our legitimate interests.',
      ],
    },
    {
      heading: '3. Advertising and tracking',
      paragraphs: [
        <>
          <strong>Ads appear only when you choose.</strong> In the Free tier,
          when you want an AI write, the App offers to show you a rewarded ad
          (Google AdMob) in exchange for one write, or to open Premium. No
          banners, no interstitials, no ads that pop up on their own. Premium
          and the free trial have no ads, and the App never starts the ads SDK
          in those sessions.
        </>,
        <>
          <strong>What tracking means here:</strong> where permitted, Google uses
          your device ID and ad ID to link activity in this App with data from
          other companies&apos; apps and websites, to show you more relevant ads
          and to measure how ads perform. We do not sell data to data brokers.
          Firebase Analytics in the App does not read your ad ID.
        </>,
        <>
          <strong>Consent:</strong> in the EEA, the UK and US states with
          privacy laws, Google&apos;s consent form appears before your first ad
          and decides whether ads may be personalised. On iOS, the App asks for
          tracking permission (App Tracking Transparency) only at the moment
          you tap to watch an ad, never at launch. If you do not allow it, the
          App does not read the IDFA and ads are not personalised — you still
          get your write as usual. Elsewhere on Android, ads are personalised
          using the Advertising ID unless you turn that off in your device
          settings.
        </>,
        'Non-personalised ads still use some data (such as IP address, approximate location and device information) for delivery, frequency capping, aggregate reporting and fraud prevention.',
        <>
          <strong>Your choices:</strong> review or withdraw your consent at any
          time from the &quot;Ad choices&quot; row in the Us tab (shown where
          consent is required). On Android, reset or delete your Advertising ID
          in Settings › Google › Ads. On iOS, change the permission in Settings
          › Privacy &amp; Security › Tracking. Or go Premium for no ads at all.
        </>,
        <>
          In some US states, sharing identifiers for personalised advertising
          may count as a &quot;sale&quot; or &quot;sharing&quot; of personal
          information under local law. You can opt out through Google&apos;s form
          or the &quot;Ad choices&quot; row above. How Google uses data:{' '}
          <a href={GOOGLE_PARTNER_SITES}>policies.google.com/technologies/partner-sites</a>.
        </>,
      ],
    },
    {
      heading: '4. What we never do',
      paragraphs: [
        'We never sell your notes, photos, messages or anything else you create. We never share that content, your name or your email with advertisers, and never use private content to target ads. Full note content never appears on widgets, notifications or any public-adjacent surface — these use generic content or limited metadata only (a widget knows just whether something was written today; the only line it prints verbatim is the self-note you deliberately leave). We never infer or simulate your partner’s actions.',
      ],
    },
    {
      heading: '5. The AI writing assistant',
      paragraphs: [
        "When you actively tap an AI suggestion, the relevant text is sent to an AI service (Google's Firebase AI Logic) to generate it, under Google's terms. We do not use this content for advertising. If you never tap, nothing is sent.",
      ],
    },
    {
      heading: '6. Storage and security',
      paragraphs: [
        'Data is stored on your device and, when signed in, on cloud infrastructure (Supabase). Data is encrypted in transit. The app-lock feature is a device-level gate on opening the app — we do not call it encryption, because it is not.',
      ],
    },
    {
      heading: '7. Third-party services',
      paragraphs: [
        'The App uses: Supabase (sync, accounts), Google Firebase (crash reporting, analytics, performance, notifications, AI), Google AdMob and Google User Messaging Platform (ads, consent form), RevenueCat, Google Play and the App Store (billing, entitlements). Each processes data under its own policy; we share only the minimum needed for the feature to work.',
      ],
    },
    {
      heading: '8. Retention and deletion',
      paragraphs: [
        'Data is kept for as long as you use the service. You can delete notes, photos or your whole account right in the app (the Us tab); synced data is removed from servers within a reasonable time. Signing out deletes the identifier the App uses for analytics and crash reporting on that device. Advertising data is retained by Google under Google’s policies; you can reset your ad ID at any time. For help, email us.',
      ],
    },
    {
      heading: '9. Children',
      paragraphs: [
        'The App is intended for users aged 13 and over and does not knowingly collect data from children under 13.',
      ],
    },
    {
      heading: '10. Your rights',
      paragraphs: [
        <>
          You can access, correct, export and delete your data, withdraw your
          consent to personalised ads at any time, and object to your data being
          used for personalised ads. Most of it works right in the app or your
          device settings; for the rest, email{' '}
          <a href={MAILTO}>{SITE.email}</a> — we reply within 2–3 working days.
          You may also complain to the data protection authority where you
          live.
        </>,
      ],
    },
    {
      heading: '11. Changes',
      paragraphs: [
        'Material changes will be announced in the app or on this page before they take effect, with a new effective date at the top.',
      ],
    },
  ],
};

export function privacyContent(lang: Lang): LegalDocument {
  return lang !== 'en' ? VI : EN;
}
