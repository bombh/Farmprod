import { View, Text, Pressable, Linking } from "react-native"
import React from "react"
import { Image } from "expo-image"
import { MaterialIcons } from "@expo/vector-icons"
import colors from "tailwindcss/colors"

const placeholder = require("@/src/assets/images/placeholder.png")

// Delete HTML tags
const deleteHtmlTag = (html, tag) => {
   return html
      .replace(new RegExp(`<${tag}>`, "gmi"), "")
      .replace(new RegExp(`</${tag}>`, "gmi"), "")
}
// Delete HTML tags
const deleteHtmlTagAttributes = (html, tag) => {
   return html
      .replace(new RegExp(`<${tag}.+?>`, "gmi"), "")
      .replace(new RegExp(`</${tag}>`, "gmi"), "")
}

const deleteHtmlTagFull = (html, tag) => {
   return html.replace(new RegExp(`<${tag}.+?>.+?</${tag}>`, "gmi"), "")
}

// Delete HTML attributes
const deleteHtmlAttribute = (html, attr) => {
   return html.replace(new RegExp(` ${attr}=".+?"`, "gmi"), "")
}

// Clean HTML
const cleanHtml = (html) => {
   html = deleteHtmlTagAttributes(html, "figure")
   html = deleteHtmlTagAttributes(html, "figcaption")
   html = deleteHtmlTagAttributes(html, "div")
   html = deleteHtmlTagAttributes(html, "iframe")
   html = deleteHtmlTagFull(html, "a")
   html = deleteHtmlTag(html, "strong")
   html = deleteHtmlTag(html, "br")
   html = html.replace(/ alt/gim, "")

   html = deleteHtmlAttribute(html, "class")
   html = deleteHtmlAttribute(html, "srcset")
   html = deleteHtmlAttribute(html, "loading")
   html = deleteHtmlAttribute(html, "width")
   html = deleteHtmlAttribute(html, "height")
   html = deleteHtmlAttribute(html, "sizes")

   // Replace image size
   html = html.replace(/images\//gim, "images/size/w600/")

   // delete any empty tags
   html = html.replace(/<(\w+)>\s*<\/\1>/gim, "")

   // Transfer string to array
   html = html.replace(/></gim, ">~<")
   html = html.split("~")

   return html
}

export default function RenderHtml({ html, authors, email }) {
   const htmlArray = cleanHtml(html)
   const artists = authors?.map((author) => author.name).join(" / ")

   let content = ""

   return (
      <View className="px-0">
         {/* HTML tags from array  */}
         {htmlArray.map((item, index) => {
            switch (item.substring(0, 3)) {
               case "<p>":
                  // <p>
                  content = item.replace(/<p>/, "").replace(/<\/p>/, "")
                  return (
                     <Text
                        className="text-base text-center mx-5 px-5 py-2 mb-5"
                        key={index}
                     >
                        {content}
                     </Text>
                  )
                  break
               case "<h2":
                  // <h2>
                  content = item.replace(/<h2.+?>/, "").replace(/<\/h2>/, "")
                  return (
                     <View className="bg-black mx-5 px-5 py-3" key={index}>
                        <Text className="text-lg text-white text-center">
                           {content}
                        </Text>
                     </View>
                  )
                  break
               case "<im":
                  // <image>
                  return (
                     <View className="w-full" key={index}>
                        <Image
                           className="w-full aspect-square mb-7"
                           source={{ uri: item.substring(10, item.length - 2) }}
                           placeholder={placeholder}
                           placeholderContentFit="cover"
                           transition={500}
                        />
                     </View>
                  )
                  break
               default:
                  return null
            }
         })}

         {/* Authors if exists */}
         {artists && (
            <>
               <View className="bg-black mx-5 px-5 py-3" key="authors">
                  <Text className="text-lg text-white text-center">
                     Artists
                  </Text>
               </View>
               <Text
                  className="text-base mx-5 px-5 py-2 mb-10 text-center"
                  key="artists"
               >
                  {artists}
               </Text>
            </>
         )}

         {/* Email if exists */}
         {email && (
            <View className="flex items-center justify-center">
               <Pressable
                  className="flex bg-black w-14 h-14 rounded-full active:bg-red-500 items-center justify-center mb-10"
                  onPress={() => {
                     Linking.openURL(`mailto:${email}`)
                  }}
               >
                  <MaterialIcons name="email" size={24} color={colors.white} />
               </Pressable>
            </View>
         )}
      </View>
   )
}
