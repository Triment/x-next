"use client";

import { useClient, useMutation, useQuery, useSubscription } from "@urql/next";
// import { useQuery } from '@urql/next';
import { Suspense, useState } from "react";
import { CHANNELS, GET_USER_TOKEN, PUBSUB_CHANNEL, SEND_CHANNEL, UPLOAD_FILE, USERS } from "./sql";
// import { PUBSUB_CHANNEL } from './sql';

export default function Page() {
  return (
    <Suspense>
      <main className=" min-h-screen">
        <h1>hello</h1>
        <Main />
      </main>
    </Suspense>
  );
}

const Main = () => {
  // const handleSubscription: SubscriptionHandler<PubSubChannelSubscription[], PubSubChannelSubscription> = (messages: PubSubChannelSubscription[], response:PubSubChannelSubscription) => {
  //   return [response.exchange!, ...messages];
  // };
  const client = useClient()
  const [channelId, setChannelId] = useState('')
  const [{ data }, subChannel] = useSubscription({
    query: PUBSUB_CHANNEL,
    pause: true,
    variables: { id: channelId }
  }, (prev:any = [], data)=>{
    return [...prev, data.exchange]
  })

  const [,uploadFile] = useMutation(UPLOAD_FILE)

  const [userToken,getUserToken] = useQuery({ query: GET_USER_TOKEN, pause: true })

  const [sendRes, sendToChannel] = useMutation(SEND_CHANNEL)
  const [id, setUserId] = useState('')
  const [msg, setSendMsg] = useState('')
  return <div className="w-full grid grid-cols-2">
    <div>
      <UsersList/>
      <input type="text" onChange={e=>setUserId(e.currentTarget.value)} />
      <button className="ml-2 text-green-700 px-2 py-1 shadow-md rounded" onClick={()=>{
        getUserToken({ id })
      }}>获取token</button>
      <button className="ml-2 text-green-700 px-2 py-1 shadow-md rounded" onClick={()=>{
        localStorage.setItem('token', userToken!.data!.token!)
      }}>设置token</button>
      <p>token: {userToken!.data && userToken!.data!.token}</p>
      <ChannelsList/>
    </div>
    <div>
      <input type="text" onChange={e=>setChannelId(e.currentTarget.value)}  />
      <p>channel {channelId}</p>
      <button className="ml-2 text-green-700 px-2 py-1 shadow-md rounded" onClick={()=>{
        // client.subscription(PUBSUB_CHANNEL, { id: channelId}).subscribe((res)=>{
        //   alert(res.data!.exchange)
        // })
        subChannel()
      }}>订阅消息</button>
      <p>
        {
          data && (data as unknown as any).map((item:any, i:number)=>{
            return <div key={i}>
              <h1>{item.from&&item.from.id}</h1>
              <p>{item.body}</p>
            </div>
          })
        }
      </p>
      <input type="text" onChange={e=>setSendMsg(e.currentTarget.value)} />
      <button onClick={()=>{
        sendToChannel({ channelId, body: msg})
      }}>发送</button>
    </div>

    <input type="file" multiple onChange={({ target: { files }})=>{
      uploadFile({ file: files![0]})
    }}/>
  </div>
};


const UsersList = ()=>{
  const [{data}] = useQuery({ query: USERS })
  if(data)
  return <ul>
    {
      data!.users!.map((item, k)=>{
        return <li key={k}>{item?.id}</li>
      })
    }
  </ul>
}

const ChannelsList = ()=>{
  const [{data}] = useQuery({ query: CHANNELS })
  if(data)
  return <ul>
    {
      data!.channels!.map((item, k)=>{
        return <li key={k}>{item?.id}</li>
      })
    }
  </ul>
}