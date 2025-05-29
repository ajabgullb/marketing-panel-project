
interface IContainer {
  children: React.ReactNode
}

const Container = ({ children }: IContainer) => {
  return (
    <div className=''>
      {children}
    </div>
  )
}

export default Container
