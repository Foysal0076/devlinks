import LinkForm from '@/components/links/link-form'

const LinksFormSection = () => {
  return (
    <div>
      <div className='p-5 md:p-6'>
        <h1 className='h4 mb-2 font-bold'>Customize your links</h1>
        <p className=''>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>
      <LinkForm />
    </div>
  )
}

export default LinksFormSection
