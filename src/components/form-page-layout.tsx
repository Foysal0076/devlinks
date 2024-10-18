import DeviceLinkPreview from '@/components/device-link-preview'

type Props = {
  children: React.ReactNode
}

export const FormPageLayout = ({ children }: Props) => {
  return (
    <div className='container pt-4 md:pt-0'>
      <div className='flex gap-6'>
        <section className='hidden h-full rounded-xl bg-neutral-0 shadow-sm dark:bg-surface-100/70 md:block md:basis-1/3'>
          <DeviceLinkPreview />
        </section>
        <section className='h-full basis-full rounded-xl bg-neutral-0 shadow-sm dark:bg-surface-100/70 md:basis-2/3'>
          {children}
        </section>
      </div>
    </div>
  )
}
