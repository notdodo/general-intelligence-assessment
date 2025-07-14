import { chooseRandom, pickRandom } from "@/random";
import TestButton from "@components/TestApp/TestButton";
import TestIntro from "@components/TestApp/TestIntro";
import { TestName, type TestProps } from "@components/TestApp/types";
import { Card, CardHeader, CardTitle, CardFooter } from "@components/ui/card";
import { categories as categoriesEn } from "./data-en";
import { categories as categoriesPl } from "./data-pl";
import { categories as categoriesEs } from "./data-es";
import { categories as categoriesIt } from "./data-it";
import React, { useContext } from "react";
import { LocaleContext } from "@/contexts/LocaleContext";
import { i18n, type Locale } from "@/i18n";
import { logOnIncorrect } from "@components/TestApp/logOnIncorrect";

const Words = (props: TestProps) => {
  const { onCorrectAnswer, onIncorrectAnswer, testState } = props;
  const locale = useContext(LocaleContext);
  const t = i18n(locale, "words-meaning");
  const [question, setQuestion] = React.useState(() =>
    generateQuestion(locale),
  );

  const onAnswer = (answer: string) => {
    if (answer === question.answer) {
      onCorrectAnswer();
    } else {
      logOnIncorrect(question, answer);
      onIncorrectAnswer();
    }

    setQuestion(generateQuestion(locale));
  };

  if (testState === "intro")
    return (
      <TestIntro
        testName={TestName.WORDS_MEANING}
        onStartTest={props.onStartTest}
      >
        <p className="text-justify">{t("intro")}</p>
      </TestIntro>
    );

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("question")}</CardTitle>
      </CardHeader>
      <CardFooter className="flex flex-wrap justify-center gap-4">
        {question.words.map((word) => (
          <TestButton key={word} onClick={() => onAnswer(word)}>
            {word}
          </TestButton>
        ))}
      </CardFooter>
    </Card>
  );
};

export default Words;

function generateQuestion(locale: Locale) {
  const categories =
    locale !== "pl"
      ? locale !== "es"
        ? locale !== "it"
          ? categoriesEn
          : categoriesIt
        : categoriesEs
      : categoriesPl;

  const [matching, odd] = chooseRandom(categories, 2, true);
  const matchingWords = chooseRandom(matching, 2, true);
  const oddWord = pickRandom(odd);

  const words = [...matchingWords, oddWord];
  return {
    words: chooseRandom(words, words.length, true),
    answer: oddWord,
  };
}
