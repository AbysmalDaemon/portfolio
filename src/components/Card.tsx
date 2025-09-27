import clsx from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        // smoky glass look (copied from Timeline)
        'p-6 rounded-lg',
        'bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75',
        'backdrop-filter backdrop-blur-sm',
        'border-2 border-gray-200 dark:border-gray-600',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
