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
      <ProfilePictureSection />
    </div>
  )
}

export default ProfileDetails
