import { cn, generateDiscColor } from '@/lib/utils'

export const DiscSilhouette = ({ name, className }: { name: string; className?: string }) => {
  const color = generateDiscColor(name)
  return <div className={cn('size-24 rounded-full', className, color)} />
}
