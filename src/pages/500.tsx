import bg500 from '@/assets/images/bg-500.png'
import ErrorScreen from '@/components/ErrorScreen'

const ServerErrorPage = (): JSX.Element => {
  return (
    <ErrorScreen
      imageURL={bg500}
      title="Oops! This Page is Not Working."
      subTitle="The requested is Internal Server Error."
    />
  )
}

export default ServerErrorPage
