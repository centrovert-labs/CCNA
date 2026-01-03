
import React, { useState } from 'react';
import { transformRawArticleToJson } from '../services/migrationService';
import { FileCode, Play, Copy, Check, AlertCircle, Info } from 'lucide-react';

const MigrationTool: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleMigrate = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    const result = await transformRawArticleToJson(input);
    setOutput(result);
    setIsLoading(false);
  };

  const copyToClipboard = () => {
    if (!output) return;
    const jsonString = JSON.stringify({ ...output, id: Date.now().toString() }, null, 2);
    navigator.clipboard.writeText(jsonString + ',');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <FileCode className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-serif">Gemini Legal Migrator</h1>
              <p className="text-slate-400 text-sm">Convert WordPress junk to high-performance JSON</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-xs px-3 py-1 bg-slate-800 rounded-full text-slate-400 border border-slate-700">
              Target: data/articles.ts
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Raw WordPress Content</label>
              <span className="text-[10px] text-slate-500 italic">Paste HTML or Text</span>
            </div>
            <textarea
              className="flex-grow min-h-[500px] bg-slate-800 border border-slate-700 rounded-xl p-4 text-sm font-mono focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-300"
              placeholder="Paste your old WordPress article content here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={handleMigrate}
              disabled={isLoading || !input.trim()}
              className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white font-bold rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg shadow-blue-900/20"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Gemini is analyzing legal context...</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 fill-current" />
                  <span>Convert to Legal JSON</span>
                </>
              )}
            </button>
          </div>

          {/* Output Panel */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Structured JSON Output</label>
              {output && (
                <button
                  onClick={copyToClipboard}
                  className="flex items-center space-x-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied to clipboard' : 'Copy JSON Block'}</span>
                </button>
              )}
            </div>
            
            {output ? (
              <div className="flex-grow bg-slate-950 border border-slate-800 rounded-xl p-6 overflow-auto">
                <pre className="text-xs text-blue-300 font-mono leading-relaxed">
                  {JSON.stringify({ ...output, id: "NEXT_ID" }, null, 2)}
                </pre>
              </div>
            ) : (
              <div className="flex-grow flex flex-col items-center justify-center bg-slate-800/50 border-2 border-dashed border-slate-700 rounded-xl p-12 text-center">
                <Info className="w-12 h-12 text-slate-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-400">Ready for Migration</h3>
                <p className="text-slate-500 text-sm max-w-xs mt-2">
                  Paste your WordPress content on the left to generate clean, SEO-optimized legal data.
                </p>
              </div>
            )}

            <div className="bg-blue-900/20 border border-blue-500/20 p-4 rounded-xl flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-blue-400 mt-0.5" />
              <div className="text-xs text-blue-200/70 leading-relaxed">
                <span className="font-bold text-blue-300 block mb-1">How to use:</span>
                1. Convert the article.<br />
                2. Click "Copy JSON Block".<br />
                3. Open <code className="bg-slate-900 px-1 rounded">data/articles.ts</code>.<br />
                4. Paste it into the <code className="bg-slate-900 px-1 rounded">articleData</code> array.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MigrationTool;
