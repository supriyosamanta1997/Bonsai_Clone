import { Button, useToast } from '@chakra-ui/react'

export function ToastExample() {
    const toast = useToast()
    return (
      
          toast({
            title: 'For seeing review you need to.',
            description: "Login First.",
            status: 'error',
            duration: 1000,
            isClosable: true,
          })
        
    )
  }