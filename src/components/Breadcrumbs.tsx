import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-0 text-xs sm:text-sm text-dynace-muted">
      <ol className="flex items-center flex-wrap gap-1 sm:gap-2">
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center gap-1 text-dynace-muted hover:text-dynace-blue transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1 sm:gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              {isLast || !item.path ? (
                <span className="font-medium text-dynace-deep truncate max-w-[200px] sm:max-w-none" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-dynace-muted hover:text-dynace-blue transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
