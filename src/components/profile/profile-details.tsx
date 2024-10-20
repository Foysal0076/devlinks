import ProfileEditForm from '@/components/profile/profile-edit-form'
import ProfilePictureSection from '@/components/profile/profile-picture-section'

const ProfileDetails = () => {
  return (
    <div className='@container/profile-picture'>
      <div className='p-5 md:p-6'>
        <h1 className='h4 mb-2 font-bold'>Profile Details</h1>
        <p className='text-sm md:text-base'>
          Add your details to create a personal touch to your profile.
        </p>
      </div>
      <div className='flex h-full max-h-[72vh] min-h-[72vh] flex-col gap-6 overflow-y-auto lg:max-h-[64vh] lg:min-h-[64vh] 2xl:max-h-[68vh] 2xl:min-h-[68vh]'>
        <ProfilePictureSection />
        <ProfileEditForm />
      </div>
    </div>
  )
}

export default ProfileDetails
