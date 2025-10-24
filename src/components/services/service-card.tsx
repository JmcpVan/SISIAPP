import type { Service } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, ShieldAlert } from 'lucide-react';
import { CategoryIcon } from '@/components/icons/category-icon';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full transition-shadow duration-300 hover:shadow-xl border-t-4 border-transparent hover:border-primary">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-xl font-headline">{service.name}</CardTitle>
          <CategoryIcon category={service.category} className="h-10 w-10" />
        </div>
        <CardDescription>By {service.provider}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{service.description}</p>
      </CardContent>
      <CardFooter>
        {service.isValidated ? (
          <Badge className="bg-success text-success-foreground hover:bg-success/90">
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Validated
          </Badge>
        ) : (
          <Badge variant="secondary">
            <ShieldAlert className="mr-2 h-4 w-4 text-accent-foreground" />
            Pending Validation
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
}
