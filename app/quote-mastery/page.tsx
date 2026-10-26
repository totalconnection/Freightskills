import WorkshopSales from '@/components/workshop-sales';
import { workshops } from '@/lib/trainings';
import { metadata as meta } from '@/lib/config';
const workshop = workshops[0];
export const metadata = meta(
  workshop.name,
  workshop.description,
  workshop.path,
);
export default function Page() {
  return <WorkshopSales workshop={workshop} />;
}
