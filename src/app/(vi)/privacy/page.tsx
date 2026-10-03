import type { Metadata } from 'next';
import { PrivacyPage } from '@/components/pages/privacy-page';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'vi',
  path: '/privacy',
  title: 'Chính sách quyền riêng tư — Duoly',
  description:
    'Chính sách quyền riêng tư của Duoly: dữ liệu thu thập (gồm device ID và ad ID), quảng cáo và tracking, cách sử dụng, và những điều app không bao giờ làm với ghi chú của bạn.',
});

export default function Page() {
  return <PrivacyPage lang="vi" />;
}
