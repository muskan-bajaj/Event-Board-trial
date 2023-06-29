import React, { useEffect } from "react";
import Card from "../Component/UserData/Card";
import { useParams } from "react-router-dom";
import UserDataMain from "../Component/UserData/UserDataMain";

export default function UserData() {
  const { id } = useParams();
  return (
    <div>
      <UserDataMain id={id} />
    </div>
  );
}
