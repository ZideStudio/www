import type { Locale } from '@/i18n/config';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/fr';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

export const getFormattedDate = (date: Date, format?: string, locale?: Locale): string =>
  dayjs(date)
    .locale(locale ?? 'en')
    .format(format ?? 'LL');
