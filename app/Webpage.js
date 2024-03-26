'use client'
import React,{useState, useEffect} from 'react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

  

const Webpage = () => {
  const [user, setUser] = useState([])
  const url = 'https://demo6396395.mockable.io/prompts'

  const fetchData = async () => {
    const response = await fetch(url)
    const user = await response.json()
    setUser(user)
  }

  useEffect(() => {
    fetchData()
  },[])
  return (
    <div>
      <Table>
        <TableCaption className='tableHeader'>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>CreatedAt</TableHead>
            {/* <TableHead className="text-right">Amount</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody className='tableBody'>
          {user.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell className="text-right">{item.createdAt}</TableCell>
            </TableRow>
          ))}
          
        </TableBody>
        
      </Table>
    </div>
  )
}

export default Webpage