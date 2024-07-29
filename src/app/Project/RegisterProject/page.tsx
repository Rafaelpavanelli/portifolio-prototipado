'use client';
import { useState } from 'react';
import { Tecnologies } from "@/infos/ListTecnologies";
import Image from 'next/image';
import { ProjectInfosType, ProjectImageTypes } from '@/controller/types/Project.type';
import { useFirestore } from '@/controller/hooks/useFirestore';

export default function RegisterProject() {
  const {SaveImages,SaveProjects} = useFirestore()
  const [projectName, setProjectName] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [platform, setPlatform] = useState('web');
  const [link, setLink] = useState('');
  const [github, setGithub] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [detailedDescription, setDetailedDescription] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [coverFile, setCoverFile] = useState<File | null>(null);

  const handleLanguageClick = (language: string) => {
    setSelectedLanguages((prevSelectedLanguages) =>
      prevSelectedLanguages.includes(language)
        ? prevSelectedLanguages.filter((lang) => lang !== language)
        : [...prevSelectedLanguages, language]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleRemoveFile = (file: File) => {
    setFiles((prevFiles) => prevFiles.filter((f) => f !== file));
    if (coverFile === file) setCoverFile(null);
  };

  const handleSetCover = (file: File) => {
    setCoverFile(file);
  };

  const handleSubmit = async () => {
    if (!coverFile) {
      alert("Please select a cover image.");
      return;
    }

    const projectData: ProjectInfosType = {
      name: projectName,
      languages: selectedLanguages,
      plataform: platform,
      link: link || undefined,
      github,
      shortDescription,
      detailedDescription,
      coverUrl: ''
    };

    try {
      const projectId = await SaveProjects(projectData);
      if (projectId) {
        const imageFiles: ProjectImageTypes = {
          filesList: files,
          coverImage: coverFile,
          idProject: projectId,
        };
        await SaveImages(imageFiles);
        alert("Project saved successfully!");
      }
    } catch (error) {
      console.error("Error saving project:", error);
    }
  };

  return (
    <div className="w-screen h-screen p-10 md:p-10 flex justify-center items-center">
      <div className="w-full h-full bg-gray-200 rounded-md md:grid md:grid-cols-3 py-2 relative">
        <div className="border-r-2 border-r-gray-400 pt-10 flex flex-col gap-2 justify-evenly">
          <span className="w-full flex flex-col justify-center items-center gap-4 ">
            <p className="font-md text-start">Nome do Projeto</p>
            <input
              className="border-2 border-gray-500 rounded-md px-2 py-1 w-4/5"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </span>
          <span className="w-full flex flex-col justify-center items-center gap-1">
            <p className="font-md text-start">Linguagens usadas</p>
            <div className='flex flex-wrap max-w-3/4 w-3/4 gap-1'>
              {Tecnologies.map((item, index) => (
                <p
                  key={index}
                  className={`text-sm border-[1px] cursor-pointer rounded-md border-gray-500 p-1 ${selectedLanguages.includes(item.name) ? 'bg-gray-600 text-white' : ''}`}
                  onClick={() => handleLanguageClick(item.name)}
                >
                  {item.name}
                </p>
              ))}
            </div>
          </span>
          <span className="w-full flex flex-col justify-center items-center mt-4 gap-2">
            <p className="font-md text-start">Plataforma</p>
            <select
              className="border-2 border-gray-500 rounded-md px-2 py-1 w-4/5"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
            >
              <option value="mobile" className="flex justify-between items-stretch">Mobile</option>
              <option value="web" className="flex justify-between items-stretch">Web</option>
            </select>
          </span>
          <span className="w-full flex flex-col justify-center items-center gap-2">
            <p className="font-md text-start">Link</p>
            <input
              className="border-2 border-gray-500 rounded-md px-2 py-1 w-4/5"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </span>
          <span className="w-full flex flex-col justify-center items-center gap-2">
            <p className="font-md text-start">Github</p>
            <input
              className="border-2 border-gray-500 rounded-md px-2 py-1 w-4/5"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </span>
        </div>
        <div className="border-r-2 border-r-gray-400 pt-10 flex flex-col">
          <span className="w-full flex flex-col justify-center items-center gap-2">
            <p className="font-md text-start">Descrição rápida</p>
            <textarea
              className="border-2 border-gray-500 rounded-md px-2 py-1 w-4/5"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
            />
          </span>
          <span className="w-full flex flex-col justify-center items-center gap-2">
            <p className="font-md text-start">Descrição detalhada</p>
            <textarea
              className="border-2 border-gray-500 rounded-md px-2 py-1 w-4/5"
              rows={10}
              cols={40}
              value={detailedDescription}
              onChange={(e) => setDetailedDescription(e.target.value)}
            />
          </span>
          <p className={`text-end mr-10 ${detailedDescription.length < 200 ? 'text-red-600 ' : 'text-green-400'}`}>{detailedDescription.length}/200</p>
        </div>
        <div className="pt-10 flex flex-col gap-2">
          <span className="w-full flex flex-col justify-center items-center gap-2">
            <p className="font-md text-start">Arquivos</p>
            <label className='border-2 border-gray-400 rounded-md cursor-pointer relative overflow-hidden max-w-40  justify-center items-center'>
              <p className='p-4'>Adicionar</p>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </span>
          <div className="w-full flex flex-wrap justify-center items-center gap-2 overflow-auto max-h-80 mr-10">
            {files.map((file, index) => (
              <div key={index} className="flex justify-between items-center w-4/5 relative">
                <Image src={URL.createObjectURL(file)} alt={file.name} width={100} height={50} className='border-2 border-gray-200 rounded-md w-full object-cover' />
                <div className='flex absolute right-2 gap-1'>
                  <p
                    onClick={() => handleSetCover(file)}
                    className={`p-1 w-6 h-6 rounded-full text-sm flex justify-center items-center ${coverFile === file ? 'bg-green-500 text-white' : 'bg-gray-500 text-black'}`}
                  >
                    {coverFile === file ? '' : ''}
                  </p>
                  <p
                    onClick={() => handleRemoveFile(file)}
                    className="p-1 w-6 h-6 flex justify-center items-center bg-red-500 text-white rounded-full"
                  >
                    x
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button onClick={handleSubmit} className="absolute bottom-20 mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Salvar</button>
    </div>
  );
}
