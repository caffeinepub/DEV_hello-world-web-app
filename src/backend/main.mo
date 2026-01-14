import OrderedMap "mo:base/OrderedMap";
import Text "mo:base/Text";
import Iter "mo:base/Iter";

actor {
  transient let textMap = OrderedMap.Make<Text>(Text.compare);

  var greetings = textMap.fromIter<Text>(Iter.fromArray([("en", "Hello World")]));

  public query func getGreeting(language : Text) : async Text {
    switch (textMap.get(greetings, language)) {
      case (?greeting) { greeting };
      case null { "Hello World" };
    };
  };
};
