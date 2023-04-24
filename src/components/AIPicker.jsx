"use client";

import { useState } from "react";

import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(0);

  return (
    <div className="aipicker-container">
      <textarea
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
        placeholder="Ask AI for logo..."
        rows={5}
        value={prompt}
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
            />

            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
