import { useState, useEffect } from "react";
import { supabase } from "../lib/subapabase";
import { StyleSheet, View, Alert } from "react-native";
import { Button, Input } from "react-native-elements";
import { Session } from "@supabase/supabase-js";

export default function Account() {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [website, setWebsite] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  async function getProfile(params: type) {
    try {
      setLoading(true);
    } catch (error) {}
  }
}
