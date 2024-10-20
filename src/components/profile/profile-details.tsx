import ProfileEditForm from '@/components/profile/profile-edit-form'
import ProfilePictureSection from '@/components/profile/profile-picture-section'

const ProfileDetails = () => {
  return (
    <div className='p-5 @container/profile-picture md:p-6'>
      <div className='p-5 md:p-6'>
        <h1 className='h4 mb-2 font-bold'>Profile Details</h1>
        <p className=''>
          Add your details to create a personal touch to your profile.
        </p>
      </div>
      <div className='flex h-full max-h-[66vh] min-h-[66vh] flex-col gap-6 overflow-y-auto 2xl:max-h-[68vh] 2xl:min-h-[68vh]'>
        <ProfilePictureSection />
        <ProfileEditForm />
      </div>
    </div>
  )
}

export default ProfileDetails
