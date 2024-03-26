
import React ,{useState, useEffect} from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

const RightSection = ({ className, ...props }) => {
  const [data, setData] = useState([])
  const url = 'https://demo6396395.mockable.io/bcf-boards'
  const getData = async() => {
    const response = await fetch (url)
    const data = await response.json()
    setData(data)
  }
  useEffect (() => {
    getData()
  }, [])
  return (
    <div>
      <h1>BCF Boards Data:</h1>
      <Card className='CardSection'>
        {data && data.boards?.map(board => (
          <>
            <CardHeader>
              <CardTitle className='cardTitle'>{board.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="name">Created Date:</label>
                    <p className='labelText'>{board.createdAt}</p>
                    
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <h2>BCFs:</h2>
                  </div>

                </div>
              </form>
              <div>
                <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span  className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"/>
                  <div className="space-y-1">
                    {board.bcfs.map(bcf => (
                      <div key={bcf.id}>
                        <p className='bcfName'>Name: {bcf.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Created At:{bcf.createdAt}
                        </p>
                        <h4 style={{fontStyle:'italic'}}>BCF Boards:</h4>
                        {bcf.bcfBoards.map(bcfBoard => (
                          <div key={bcfBoard.id}>
                            <p>{bcfBoard.name}</p>
                            <p>Created At: {bcfBoard.createdAt}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                    
                  </div>
                </div>
              </div>

            </CardContent>
          </>
        ))}
      </Card>
      
    </div>
  );
    
  
}

export default RightSection