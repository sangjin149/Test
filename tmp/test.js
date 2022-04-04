const solution = (participant, completion) =>
  failerName(count(participant), count(completion));

const failerName = (participant, completion) =>
  go(
    participant,
    entries,
    find(([name, count]) => (completion[name] || 0) < count),
    head,
  );
