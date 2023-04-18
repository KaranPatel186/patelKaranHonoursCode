import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { Link, Redirect } from "expo-router";
import styles from "./styles";

export default function Index() {
  <styles />
  return (
    <View style={styles.container}>
    <View style={styles.main}>
      <Text style={styles.title}>Welcome</Text>
      <Link style={styles.subtitle} href="/chooseImage">Get Started </Link>
      </View>
    </View>
  );
}
