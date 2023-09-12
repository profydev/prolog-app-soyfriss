import { PageContainer } from "@features/layout";
import type { NextPage } from "next";
import {
  Button,
  ButtonIconPosition,
  ButtonSize,
  ButtonColor,
} from "@features/ui";

const AlertsPage: NextPage = () => {
  return (
    <PageContainer
      title="Alerts"
      info="Set up alerts to received notifications for certain issues or thresholds"
    >
      {/* This page has yet to be implemented */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <span>&nbsp;</span>
        <span>default</span>
        <span>disabled</span>

        <span>primary</span>
        <Button text="Button CTA" onClick={() => alert("Hi there!")} />
        <Button
          text="Button CTA"
          disabled={true}
          onClick={() => alert("Hi there!")}
        />

        <span>secondary</span>
        <Button
          color={ButtonColor.secondary}
          text="Button CTA"
          onClick={() => alert("Hi there!")}
        />
        <Button
          color={ButtonColor.secondary}
          text="Button CTA"
          disabled={true}
          onClick={() => alert("Hi there!")}
        />

        <span>gray</span>
        <Button
          color={ButtonColor.gray}
          text="Button CTA"
          onClick={() => alert("Hi there!")}
        />
        <Button
          color={ButtonColor.gray}
          text="Button CTA"
          disabled={true}
          onClick={() => alert("Hi there!")}
        />

        <span>empty</span>
        <Button
          color={ButtonColor.empty}
          text="Button CTA"
          onClick={() => alert("Hi there!")}
        />
        <Button
          color={ButtonColor.empty}
          text="Button CTA"
          disabled={true}
          onClick={() => alert("Hi there!")}
        />

        <span>empty gray</span>
        <Button
          color={ButtonColor.emptyGray}
          text="Button CTA"
          onClick={() => alert("Hi there!")}
        />
        <Button
          color={ButtonColor.emptyGray}
          text="Button CTA"
          disabled={true}
          onClick={() => alert("Hi there!")}
        />

        <span>error</span>
        <Button
          color={ButtonColor.error}
          text="Button CTA"
          onClick={() => alert("Hi there!")}
        />
        <Button
          color={ButtonColor.error}
          text="Button CTA"
          disabled={true}
          onClick={() => alert("Hi there!")}
        />

        <span>leading</span>
        <span>trailing</span>
        <span>only</span>
        <Button
          iconPosition={ButtonIconPosition.leading}
          iconSrc="/icons/alert.svg"
          color={ButtonColor.primary}
          text="Button CTA"
          onClick={() => alert("Hi there!")}
        />
        <Button
          iconPosition={ButtonIconPosition.trailing}
          iconSrc="/icons/alert.svg"
          color={ButtonColor.primary}
          text="Button CTA"
          onClick={() => alert("Hi there!")}
        />
        <Button
          iconPosition={ButtonIconPosition.only}
          iconSrc="/icons/alert.svg"
          color={ButtonColor.primary}
          onClick={() => alert("Hi there!")}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, auto)",
          gap: "2.25rem",
          alignItems: "flex-start",
          justifyContent: "start",
          marginTop: "3rem",
        }}
      >
        <span>small</span>
        <span>medium</span>
        <span>large</span>
        <span>xlarge</span>
        <Button
          size={ButtonSize.sm}
          text="Button CTA"
          color={ButtonColor.primary}
          onClick={() => alert("Hi there!")}
        />{" "}
        <Button
          size={ButtonSize.md}
          text="Button CTA"
          color={ButtonColor.primary}
          onClick={() => alert("Hi there!")}
        />{" "}
        <Button
          size={ButtonSize.lg}
          text="Button CTA"
          color={ButtonColor.primary}
          onClick={() => alert("Hi there!")}
        />{" "}
        <Button
          size={ButtonSize.xl}
          text="Button CTA"
          color={ButtonColor.primary}
          onClick={() => alert("Hi there!")}
        />
      </div>
    </PageContainer>
  );
};

export default AlertsPage;
