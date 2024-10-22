import DeviceLinkPreview from '@/components/device-link-preview'

type Props = {
  children: React.ReactNode
}

export const FormPageLayout = ({ children }: Props) => {
  return (
    <div className='mx-auto max-w-[96rem] px-4 pt-4 md:px-6 lg:pt-0'>
      <div className='flex gap-6'>
        <section className='hidden min-h-full rounded-xl bg-neutral-0 shadow-sm dark:bg-surface-100/70 lg:block lg:basis-1/3 xl:basis-5/12'>
          <DeviceLinkPreview />
        </section>
        <section className='h-full basis-full rounded-xl bg-neutral-0 shadow-sm dark:bg-surface-100/70 lg:basis-2/3 xl:basis-7/12'>
          {children}
        </section>
      </div>
    </div>
  )
}
