import clsx from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
