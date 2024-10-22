import ProfileEditForm from '@/components/profile/profile-edit-form'
import ProfilePictureSection from '@/components/profile/profile-picture-section'

const ProfileDetails = () => {
  return (
    <div className='h-[calc(100vh-5.75rem)] @container/profile-picture md:h-[calc(100vh-9rem)]'>
      <div className='flex h-full flex-col gap-4 overflow-y-auto'>
        <div className='px-5 pt-5 md:px-6 md:pt-6'>
          <h1 className='h4 mb-2 font-bold'>Profile Details</h1>
          <p className='text-sm md:text-base'>
            Add your details to create a personal touch to your profile.
          </p>
        </div>
        <ProfilePictureSection />
        <ProfileEditForm />
      </div>
    </div>
  )
}

export default ProfileDetails
