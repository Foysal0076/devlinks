import AuthPageLayout from '@/components/auth/auth-page-layout'
import LoginForm from '@/components/auth/login-form'

const LoginPage = async () => {
  return (
    <AuthPageLayout>
      <LoginForm />
    </AuthPageLayout>
  )
}

export default LoginPage
