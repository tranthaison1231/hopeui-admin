import bg404 from '@/assets/images/bg-404.png'
import ErrorScreen from '@/components/ErrorScreen'

const NotFoundPage = (): JSX.Element => {
  return (
    <ErrorScreen imageURL={bg404} title="Oops! This Page is Not Found." subTitle="The requested page dose not exist" />
  )
}

export default NotFoundPage
