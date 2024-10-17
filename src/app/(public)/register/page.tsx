import AuthPageLayout from '@/components/auth/auth-page-layout'
import RegistrationForm from '@/components/auth/registration-form'

const RegistrationPage = async () => {
  return (
    <AuthPageLayout>
      <RegistrationForm />
    </AuthPageLayout>
  )
}

export default RegistrationPage
