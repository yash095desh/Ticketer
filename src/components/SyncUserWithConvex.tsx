"use client"
import { useUser } from '@clerk/nextjs'
import { useMutation } from 'convex/react';
import React, { useEffect } from 'react'
import { api } from '../../convex/_generated/api';

const SyncUserWithConvex = () => {
    const { user } = useUser();
    const updateUser = useMutation(api.user.updateUser)

    useEffect(()=>{
        if(!user)return;
        const syncUser = async() =>{
            try {
                await updateUser({
                    userId: user.id,
                    name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
                    email: user.emailAddresses[0]?.emailAddress || ""
                })
            } catch (error) {
                console.error("Error while syncing user..",error)
            }
        }
        syncUser();
    },[user,updateUser])
  return (
    null
  )
}

export default SyncUserWithConvex