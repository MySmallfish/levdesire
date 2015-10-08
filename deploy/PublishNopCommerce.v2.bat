call "%VS110COMNTOOLS%\vsvars32.bat" 


msbuild ..\nopcommerce\Presentation\Nop.Web\Nop.Web.csproj /T:Package /P:Configuration=Release /t:TransformWebConfig

xcopy ..\nopcommerce\Presentation\Nop.Web\obj\Release\Package\PackageTmp\*.* output\ /k /y /s
xcopy config\*.* output\app_data\ /k /y /s
