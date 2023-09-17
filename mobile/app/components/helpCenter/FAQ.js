import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Chip from "../Chip";
import { useState } from "react";
import SearchBox from "../form/SearchBox";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import Accordion from "../Accordion";
import { useEffect } from "react";

const faqCategories = ["All", "General", "Account", "Service", "Payment"];
const FAQs = [
  {
    _id: "1",
    question: "What is RealEstate?",
    category: faqCategories[1],
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quas voluptas molestias nobis temporibus, architecto omnis minima similique unde iusto iste, velit hic explicabo quibusdam accusantium nisi voluptatum tempora quia debitis.",
  },
  {
    _id: "2",
    question: "How to make payment?",
    category: faqCategories[4],
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quas voluptas molestias nobis temporibus, architecto omnis minima similique unde iusto iste, velit hic explicabo quibusdam accusantium nisi voluptatum tempora quia debitis.",
  },
  {
    _id: "3",
    question: "How do I cancel booking?",
    category: faqCategories[3],
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quas voluptas molestias nobis temporibus, architecto omnis minima similique unde iusto iste, velit hic explicabo quibusdam accusantium nisi voluptatum tempora quia debitis.",
  },
  {
    _id: "4",
    question: "How do I delete my account?",
    category: faqCategories[2],
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quas voluptas molestias nobis temporibus, architecto omnis minima similique unde iusto iste, velit hic explicabo quibusdam accusantium nisi voluptatum tempora quia debitis.",
  },
  {
    _id: "5",
    question: "How do I exit the app",
    category: faqCategories[1],
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quas voluptas molestias nobis temporibus, architecto omnis minima similique unde iusto iste, velit hic explicabo quibusdam accusantium nisi voluptatum tempora quia debitis.",
  },
  {
    _id: "6",
    question: "Is there an option for refund?",
    category: faqCategories[4],
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quas voluptas molestias nobis temporibus, architecto omnis minima similique unde iusto iste, velit hic explicabo quibusdam accusantium nisi voluptatum tempora quia debitis.",
  },
  {
    _id: "7",
    question: "How do I get in touch?",
    category: faqCategories[3],
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quas voluptas molestias nobis temporibus, architecto omnis minima similique unde iusto iste, velit hic explicabo quibusdam accusantium nisi voluptatum tempora quia debitis.",
  },
];
const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(FAQs[1]._id);
  const [activeCategory, setActiveCategory] = useState(faqCategories[0]);
  const [faqsToDisplay, setFaqsToDisplay] = useState(FAQs);

  useEffect(() => {
    switch (activeCategory) {
      case faqCategories[0]:
        setFaqsToDisplay(FAQs);
        break;

      case faqCategories[1]:
        setFaqsToDisplay(
          FAQs.filter((faq) => faq.category === faqCategories[1])
        );
        break;

      case faqCategories[2]:
        setFaqsToDisplay(
          FAQs.filter((faq) => faq.category === faqCategories[2])
        );
        break;

      case faqCategories[3]:
        setFaqsToDisplay(
          FAQs.filter((faq) => faq.category === faqCategories[3])
        );
        break;

      case faqCategories[4]:
        setFaqsToDisplay(
          FAQs.filter((faq) => faq.category === faqCategories[4])
        );
        break;

      default:
        setFaqsToDisplay(FAQs);
    }
  }, [activeCategory]);

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={faqCategories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Chip
            text={item}
            focused={activeCategory === item}
            onPress={() => {
              setActiveCategory(item);
            }}
          />
        )}
        ItemSeparatorComponent={<View style={{ marginRight: 16 }} />}
      />

      <View style={{ marginTop: 10 }}>
        <SearchBox
          name={"searchFAQ"}
          RightIcon={
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="filter-variant"
                style={styles.filter}
              />
            </TouchableOpacity>
          }
          borderRadius={5}
        />
      </View>

      <FlatList
        style={{ height: 780 - 350 }}
        data={faqsToDisplay}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Accordion
            _id={item._id}
            title={item.question}
            detail={item.answer}
            active={activeQuestion}
            onPress={() => setActiveQuestion(item._id)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  filter: {
    marginRight: 16,
    fontSize: 20,
    color: colors.primaryColor,
  },
});
