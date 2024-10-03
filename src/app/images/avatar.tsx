import { cn } from '@/lib/utils';

/**
 * AvatarIcon component renders an SVG icon representing a user avatar.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.className] - Additional class names to apply to the SVG element.
 * @returns {JSX.Element} The rendered SVG element.
 *
 * @example
 * ```tsx
 * <AvatarIcon className="custom-class" />
 * ```
 */
export function AvatarIcon({
    className,
    ...props
}: React.ComponentProps<'svg'>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn('h-[40px]', className)}
            width="48" height="48"
            viewBox="0 0 48 48"
            fill="none"
            {...props}
        >
            <rect width="48" height="48" rx="24" fill="#054553" />
            <path d="M15 32C17.3358 29.5226 20.507 28 24 28C27.493 28 30.6642 29.5226 33 32M28.5 19.5C28.5 21.9853 26.4853 24 24 24C21.5147 24 19.5 21.9853 19.5 19.5C19.5 17.0147 21.5147 15 24 15C26.4853 15 28.5 17.0147 28.5 19.5Z" stroke="#C2CCDA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}